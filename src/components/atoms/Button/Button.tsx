import React from "react";
import classNames from "classnames/bind";
import styles from "./Button.module.scss";

interface Props {
	children?: React.ReactNode;
}

const cx = classNames.bind(styles);

export default function Button({ children }:Props) {
	return (
		<button className={cx("Button")}>{children}</button>
	)
}