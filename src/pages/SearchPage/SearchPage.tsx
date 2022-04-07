import React from "react";
import classNames from "classnames/bind";
import styles from "./Search.module.scss";
import { Page } from "components/atoms";
import Header from "components/templates/Header";

const cx = classNames.bind(styles);

export default function SearchPage() {
	return (
		<>
			<Header path={"search"} />
			<Page>
				<p className={cx("")}>SearchPage</p>
			</Page>
		</>
	)
}