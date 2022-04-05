import React from "react";
import classNames from "classnames/bind";
import styles from "./Page.module.scss";

interface Props {
	children: React.ReactNode;
}

const cx = classNames.bind(styles)

export default function Page({children}:Props) {
	return (
		<section className={cx("Box")}>{children}</section>
	)
}