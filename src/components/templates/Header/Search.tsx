import React, {useEffect} from "react";
import classNames from "classnames/bind";
import styles from "./Header.module.scss";
import { Logo, SearchBar } from "components/atoms";
import {useQuery, useSearchBar} from "hooks";

const cx = classNames.bind(styles);

export default function Search() {
	const query = useQuery();
	const { state, onSearch } = useSearchBar();

	useEffect(() => {
		state[1](query);
	}, [query])

	return (
		<div className={cx("left")}>
			<Logo sz={"header"} link />
			<div className={cx("search")}><SearchBar state={state} onSearch={onSearch} /></div>
		</div>
	)
}