import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

export default function useQuery() {
	const { pathname } = useLocation();
	const [query, setQuery] = useState<string>("");

	useEffect(() => {
		const string = pathname.split("/");
		if(string.length < 3) return;

		setQuery(string[2])
		console.log(string[2])
	}, [pathname]);

	return query;
}