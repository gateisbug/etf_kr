import React, {useCallback, useEffect, useState} from "react";
import classNames from "classnames/bind";
import styles from "./Home.module.scss";
import { Logo, Search } from "components/atoms";
import { ButtonBox } from "components/molecelus";
import { useNavigate } from "react-router-dom";

const cx = classNames.bind(styles);

export default function Home() {
	const navigate = useNavigate();
	const state = useState<string>("");
	const [text] = state;

	const onSearch = useCallback(() => {
		if(text.length === 0) return;
		navigate(`/search?value=${text}`);
	}, [text])

	const goList = useCallback(() => {
		navigate('/list')
	}, [])

	return (
		<section className={cx("container")}>
			<Logo />
			<section className={cx("box")}>
				<Search state={state} onSearch={onSearch} />
				<ButtonBox onClickEvents={[onSearch, goList]} />
			</section>
		</section>
	)
}