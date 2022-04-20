import { useEffect, useMemo, useState } from "react";
import {ETF} from "define";
import {useParams} from "react-router-dom";
import useList from "./useList";

const Index = useList;

export default function useFilter() {
	const params = useParams();
	const query = params.value;
	const [word, setWord] = useState<string>("");

	const result = useMemo(() => {
		const filtered = Index.filter(res => Filtering(word, res))
		return filtered.sort((a, b) => (a.priority! - b.priority!))
	}, [word])

	useEffect(() => {
		if(!query || query.length < 1) return;
		setWord(query)
	}, [query])

	return { result };
}

function Filtering(word:string, index:ETF):boolean {
	if(word.length < 1) return false;

	if(word === '지급' || word === '미지급' || word === '배당금') {
		index.priority = 1;
		switch (word) {
			case "지급":
				return exact(index.distribution);
			case "미지급":
				return exact(index.distribution);
			case "배당금":
				return index.distribution === '지급';
		}
	}

	if(exact(index.ticker)) {
		index.priority = 1;
		return true;
	}

	if(like(index.name)) {
		index.priority = 1;
		return true;
	}

	if(!!index.tags.find(el => like(el))) {
		index.priority = 2;
		return true;
	}

	if(exact(index.operator)) {
		index.priority = 2;
		return true;
	}

	// if(like(index.ticker)) {
	// 	index.priority = 3;
	// 	return true;
	// }

	if(like(index.explain)) {
		index.priority = 4;
		return true;
	}

	return false;



	function exact(item:string) {
		return item.toLowerCase() === word.toLowerCase();
	}

	function like(item:string) {
		return item.toLowerCase().includes(word.toLowerCase());
	}
}