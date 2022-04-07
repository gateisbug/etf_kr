import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

type Option = 0 | 1 | 2;

export default function useQuery(option:Option=2) {
	const { pathname } = useLocation();
	const [query, setQuery] = useState<string>("");

	useEffect(() => {
		const string = pathname.split("/");
		setQuery(decodeURI(string[option]));
	}, [pathname, option]);

	return sanitizeQuery(query);
}

function sanitizeQuery(query:string) {
	if(query === 'null' || query === 'undefined' || query === 'unknown') {
		return "";
	}
	else {
		return query;
	}
}