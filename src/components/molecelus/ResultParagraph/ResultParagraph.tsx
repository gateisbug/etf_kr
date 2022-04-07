import React, {useCallback, useMemo} from "react";
import classNames from "classnames/bind";
import styles from "./ResultParagraph.module.scss";
import { ETF } from "define";
import {useNavigate} from "react-router-dom";

interface Props {
	etf: ETF
}

const cx = classNames.bind(styles);

export default function ResultParagraph({ etf }:Props) {
	const navigate = useNavigate();

	const tags = useMemo(() => {
		if(etf.tags.length < 1) {
			return (
				<p className={cx("opterator")}>
					{etf.operator}
				</p>
			);
		}
		const after = etf.tags.reduce((acc, cur) => {
			return `${acc}, ${cur}`
		});

		return (
			<p className={cx("opterator")}>
				{`${etf.operator} > `}
				<span className={cx('tags')}>{after}</span>
			</p>
		)
	}, [etf.tags])

	const onClick = useCallback(() => {
		navigate(`/info/${etf.name}`);
	}, [etf.name])

	return (
		<article className={cx("Result")}>
			{tags}
			<h1 className={cx("header")} onClick={onClick}>{`${etf.name}(${etf.ticker})`}</h1>
			<p className={cx("explain")}>{etf.explain}</p>
		</article>
	)
}