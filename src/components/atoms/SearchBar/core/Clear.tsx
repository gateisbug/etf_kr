import React from "react";
import classNames from "classnames/bind";
import styles from "../Search.module.scss";
import { CloseIcon } from "assets";

interface Props {
	onClear:any;
}

const cx = classNames.bind(styles);

export default function Clear({ onClear }:Props) {
	return (
		<div className={cx("icon", "clear")} onClick={onClear}>
			<span><CloseIcon color={"#9aa0a6"} /></span>
		</div>
	)
}