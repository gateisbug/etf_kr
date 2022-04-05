import React from "react";
import { NavLink } from "react-router-dom";
import classNames from "classnames/bind";
import styles from "./Logo.module.scss";

interface Props {
	sz?: "header" | "main";
	link?: boolean;
}

const cx = classNames.bind(styles);

export default function Logo({ sz="main", link=false }:Props) {
	if(!link) {
		return (
			<div className={cx("Logo")}>
				<h1 className={cx(sz)}>etf.kr</h1>
			</div>
		)
	}
	else {
		return (
			<NavLink to={"/"}>
				<div className={cx("Logo")}>
					<h1 className={cx(sz)}>etf.kr</h1>
				</div>
			</NavLink>
		)
	}
}