import React from "react";
import classNames from "classnames/bind";
import styles from "./Button.module.scss";

interface Props {
	onClick?: any;
	title?: string;
	children?: React.ReactNode;
}

const cx = classNames.bind(styles);

export default function Button({ children, title, onClick }:Props) {
	return (
		<button className={cx("Button")} onClick={onClick} title={title}>{children}</button>
	)
}