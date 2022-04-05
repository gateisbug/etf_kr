import { useCallback, useState } from "react";
import {useNavigate} from "react-router-dom";

export default function useSearchBar() {
	const navigate = useNavigate();
	const state = useState<string>("");

	const onSearch = useCallback(() => {
		if(state[0].length === 0) return;
		navigate(`/search/${state[0]}`);
	}, [navigate, state])

	return { state, onSearch }
}