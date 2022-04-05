import React, {useRef, useCallback, useEffect} from "react";
import classNames from "classnames/bind";
import styles from "./Search.module.scss";
import {CloseIcon, SearchIcon} from "assets";
import {isFocus} from "hooks";

interface Props {
	state: [string, React.Dispatch<React.SetStateAction<string>>];
	onSearch: any;
}

const cx = classNames.bind(styles);

export default function Search({ state, onSearch }:Props) {
	const [text, setText] = state;
	const inputRef = useRef<HTMLInputElement>(null);

	const onChange = (e:any) => {
		setText(e.target.value)
	}

	const onClear = useCallback(()=> {
		setText("")
		inputRef.current?.focus();
	}, [inputRef])

	useEffect(() => {
		function keyUpHander(e:KeyboardEvent) {
			if(!isFocus('input')) return;

			switch (e.key) {
				case 'Enter': onSearch(); break;
			}
		}
		document.addEventListener('keyup', keyUpHander);
		return () => { document.removeEventListener('keyup', keyUpHander); }
	}, [onSearch])

	return (
		<div className={cx("container")}>
			<div className={cx("box")}>
				<div className={cx("icon")}><span><SearchIcon color={"#9aa0a6"} /></span></div>

				<div className={cx("input")}>
					<input ref={inputRef} type="text" onChange={onChange} value={text} title={"검색"}/>
				</div>

				{
					text.length > 0
						? <div className={cx("icon", "clear")} onClick={onClear}><span><CloseIcon color={"#9aa0a6"} /></span></div>
						: <div className={cx("block")} />
				}
			</div>
		</div>
	)
}