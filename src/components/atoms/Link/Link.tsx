import React from "react";
import classNames from "classnames/bind";
import styles from "./Link.module.scss";
import { NavLink } from "react-router-dom";

interface Props {
	to: string;
	title?: string;
	children: React.ReactNode;
}

const cx = classNames.bind(styles);

export default function Link({ to, title, children }:Props) {
	return (
		<div className={cx("link")}>
			<NavLink to={to} title={title}>{children}</NavLink>
		</div>
	)
}