import React from "react";
import classNames from "classnames/bind";
import styles from "./Header.module.scss";
import { Logo, SearchBar } from "components/atoms";
import {useSearchBar} from "hooks";
import {useParams} from "react-router-dom";

const cx = classNames.bind(styles);

export default function Search() {
	const params = useParams();
	const query = params.value;
	const { state } = useSearchBar();

	return (
		<div className={cx("left")}>
			<Logo sz={"header"} link />
			<div className={cx("search")}>
				<SearchBar state={state} defaultValue={query} />
			</div>
		</div>
	)
}