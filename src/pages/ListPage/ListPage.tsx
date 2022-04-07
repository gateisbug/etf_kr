import React from "react";
import classNames from "classnames/bind";
import styles from "./List.module.scss";
import { Page } from "components/atoms";
import Header from "components/templates/Header";

const cx = classNames.bind(styles);

export default function ListPage() {
	return (
		<>
			<Header path={"list"} />
			<Page>
				<p className={cx("")}>ListPage</p>
			</Page>
		</>
	)
}