import React, { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import classNames from "classnames/bind";
import styles from "./Home.module.scss";
import { Logo, SearchBar, Page } from "components/atoms";
import { ButtonBox } from "components/molecelus";
import { useSearchBar } from "hooks";

const cx = classNames.bind(styles);

export default function Home() {
	const navigate = useNavigate();
	const { state, onSearch } = useSearchBar();

	const goList = useCallback(() => {
		navigate('/list');
	}, [navigate])

	return (
		<Page>
			<Logo />
			<section className={cx("box")}>
				<div className={cx("search")}><SearchBar state={state} onSearch={onSearch} /></div>
				<ButtonBox onClickEvents={[onSearch, goList]} />
			</section>
		</Page>
	)
}