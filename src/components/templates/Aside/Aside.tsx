import React from "react";
import classNames from "classnames/bind";
import styles from "./Aside.module.scss";

const cx = classNames.bind(styles);

export default function Aside() {
	return (
		<aside className={cx("container")}>
			Aside
		</aside>
	)
}