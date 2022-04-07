import React from "react";
import classNames from "classnames/bind";
import styles from "./AboutPage.module.scss"
import Header from "components/templates/Header";
import {Page} from "components/atoms";

const cx = classNames.bind(styles);

export default function AboutPage() {
	return (
		<>
			<Header path={"about"} />
			<Page>
				<p className={cx("")}>AboutPage</p>
			</Page>
		</>
	)
}