import React from "react";
import classNames from "classnames/bind";
import styles from "../Search.module.scss";
import {SearchIcon} from "assets";

const cx = classNames.bind(styles);

export default function Icon() {
	return (
		<div className={cx("icon")}>
			<span><SearchIcon color={"#9aa0a6"} /></span>
		</div>
	)
}