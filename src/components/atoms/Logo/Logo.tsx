import React from "react";
import classNames from "classnames/bind";
import styles from "./Logo.module.scss";

const cx = classNames.bind(styles);

export default function Logo() {
	return (
		<div className={cx("Logo")}>
			<h1>etf.kr</h1>
		</div>
	)
}