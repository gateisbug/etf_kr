import React from "react";
import classNames from "classnames/bind";
import styles from "./Header.module.scss";

const cx = classNames.bind(styles);
const isMobile:boolean = false;

export default function Header() {
	return (
		<header className={cx("container", isMobile?"M":"D")}>
			Header
		</header>
	)
}