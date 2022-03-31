import React from "react";
import classNames from "classnames/bind";
import styles from "./Header.module.scss";

const cx = classNames.bind(styles);

export default function Header() {
	return (
		<header className={cx("container")}>
			Header
		</header>
	)
}