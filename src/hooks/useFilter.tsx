import React, {useEffect, useMemo, useState} from "react";
import kodex from "resources/kodex";
import {ETF} from "define";
import {useQuery} from "./index";

const Index = kodex;

export default function useFilter() {
	const query = useQuery();
	const [word, setWord] = useState<string>("");

	const result = useMemo(() => {
		return Index.filter(res => Filtering(word, res))
	}, [word])

	useEffect(() => {
		if(query.length < 1) return;
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
		index.detail.index.title.toLowerCase()
	];

	return !!list.find(element => element.includes(word.toLowerCase()));
}