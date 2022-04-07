import React from "react";
import classNames from "classnames/bind";
import styles from "./Search.module.scss";
import { useFilter } from "hooks";
import { Page } from "components/atoms";
import Header from "components/templates/Header";
import { ResultParagraph } from "components/molecelus";

const cx = classNames.bind(styles);

export default function SearchPage() {
	const { result } = useFilter();

	return (
		<>
			<Header path={"search"} />
			<Page>
				<main className={cx("result")}>
					{
						result.map((etf, idx) => <ResultParagraph key={idx} etf={etf} />)
					}
				</main>
			</Page>
		</>
	)
}