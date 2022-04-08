import React from "react";
import { useList } from "hooks";
import { Page } from "components/atoms";
import { ResultParagraph } from "components/molecelus";
import Header from "components/organism/Header";

const Index = useList;

export default function ListPage() {
	return (
		<>
			<Header path={"list"} />
			<Page box>
				{ Index.map((etf, idx) => <ResultParagraph key={idx} etf={etf} />) }
			</Page>
		</>
	)
}