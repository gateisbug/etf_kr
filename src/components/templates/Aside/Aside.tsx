import React from "react";
import classNames from "classnames/bind";
import styles from "./Aside.module.scss";

const cx = classNames.bind(styles);
const isMobile:boolean = false;

export default function Aside() {
	return (
		<aside className={cx("container", isMobile?"M":"D")}>
			Aside
		</aside>
	)
}