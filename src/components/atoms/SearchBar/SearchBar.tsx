import React, { useRef, useCallback } from "react";
import { OptionalBinding } from "hooks";
import Looks from "./SearchBarLook";

interface Props {
	state: [string, React.Dispatch<React.SetStateAction<string>>];
	defaultValue?: string;
}

export default function SearchBar({ state, defaultValue="" }:Props) {
	const [text, setText] = state;
	const inputRef = useRef<HTMLInputElement>(null);

	const onChange = useCallback((e:any) => {
		setText(e.target.value)
	}, []);

	const onClear = useCallback(()=> {
		setText("");
		OptionalBinding(inputRef.current, () => {
			inputRef.current!.focus();
			inputRef.current!.value=""
		});
	}, [inputRef])

	return (
		<Looks text={text}
			   defaultValue={defaultValue}
			   inputRef={inputRef}
			   onChange={onChange}
			   onClear={onClear}
		/>
	);
}
