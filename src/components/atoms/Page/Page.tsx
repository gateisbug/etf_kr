import React from "react";
import classNames from "classnames/bind";
import styles from "./Page.module.scss";

interface Props {
	box?: boolean;
	children: React.ReactNode;
}

const cx = classNames.bind(styles)

export default function Page({box=false, children}:Props) {
	if(box) {
		return <section className={cx("Page")}><main className={cx("Box")}>{children}</main></section>
	}
	else {
		return <section className={cx("Page")}>{children}</section>
	}
}