import {useMemo} from "react";
import useQuery from "./useQuery";
import kodex from "resources/kodex";

const Index = kodex;

export default function useInfo() {
	const query = useQuery();

	return useMemo(() => {
		if (query.length < 1) return null;
		return Index.find(element => element.name === query);
	}, [query]);
}