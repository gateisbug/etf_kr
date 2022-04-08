import React from "react";
import { useFilter } from "hooks";
import { Page } from "components/atoms";
import { ResultParagraph } from "components/molecelus";
import Header from "components/organism/Header";

export default function SearchPage() {
	const { result } = useFilter();

	return (
		<>
			<Header path={"search"} />
			<Page box>
				{ result.map((etf, idx) => <ResultParagraph key={idx} etf={etf} />) }
			</Page>
		</>
	)
}