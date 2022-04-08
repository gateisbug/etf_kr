import React from "react";
import classNames from "classnames/bind";
import styles from "./Footer.module.scss";

const cx = classNames.bind(styles);

export default function Footer() {
	return (
		<footer className={cx("container")}>
			<address>Des Materialismus</address>
		</footer>
	)
}