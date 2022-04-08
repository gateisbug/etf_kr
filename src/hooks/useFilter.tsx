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
		return Index.filter(res => Filtering(word, res))
	}, [word])

	useEffect(() => {
		if(!query || query.length < 1) return;
		setWord(query)
	}, [query])

	return { result };
}

function Filtering(word:string, index:ETF):boolean {
	if(word.length < 1) return false;

	const list = [
		index.operator.toLowerCase(),
		index.name.toLowerCase(),
		index.ticker.toLowerCase(),
	];

	const tags = index.tags.map((item) => item.toLowerCase());

	return !!list.concat(tags).find(element => element.includes(word.toLowerCase()));
}