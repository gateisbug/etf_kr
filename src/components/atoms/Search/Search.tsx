import React from "react";
import classNames from "classnames/bind";
import styles from "./Search.module.scss";
import {SearchIcon} from "assets";

const cx = classNames.bind(styles);

export default function Search() {
	return (
		<div className={cx("container")}>
			<div className={cx("box")}>
				<div className={cx("icon")}><span><SearchIcon color={"#9aa0a6"} /></span></div>
				<div className={cx("input")}><input type="text"/></div>
				<div className={cx("block")} />
			</div>
		</div>
	)
}