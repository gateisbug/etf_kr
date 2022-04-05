import React from "react";
import classNames from "classnames/bind";
import styles from "./Search.module.scss";
import { Page } from "components/atoms";

const cx = classNames.bind(styles);

export default function SearchPage() {
	return (
		<Page>
			<p className={cx("")}>SearchPage</p>
		</Page>
	)
}