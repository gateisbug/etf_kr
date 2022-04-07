import React from "react";
import classNames from "classnames/bind";
import styles from "../Search.module.scss";

const cx = classNames.bind(styles);

export default function Block() {
	return <div className={cx("block")} />;
}