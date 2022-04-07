import React from "react";
import classNames from "classnames/bind";
import styles from "./Info.module.scss"
import { Page } from "components/atoms";
import Header from "components/templates/Header";

const cx = classNames.bind(styles);

export default function InfoPage() {
	return (
		<>
			<Header path={"info"} />
			<Page>
				<p className={cx("")}>InfoPage</p>
			</Page>
		</>
	)
}