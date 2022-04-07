import {useCallback, useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import {isFocus} from "./index";

export default function useSearchBar() {
	const navigate = useNavigate();
	const state = useState<string>("");

	const onSearch = useCallback(() => {
		if(state[0].length === 0) return;
		navigate(`/search/${state[0]}`);
	}, [state])

	useEffect(() => {
		function keyUpHander(e:KeyboardEvent) {
			if(!isFocus('input')) return;

			switch (e.key) {
				case 'Enter': onSearch(); break;
			}
		}
		document.addEventListener('keyup', keyUpHander);
		return () => {
			document.removeEventListener('keyup', keyUpHander);
		}
	}, [onSearch])

	return { state, onSearch }
}