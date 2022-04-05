import React from "react";
import {useLocation} from "react-router-dom";
import classNames from "classnames/bind";
import styles from "./Header.module.scss";
import { Link, Logo } from "components/atoms";
import Profile from "./Profile";
import Search from "./Search";

const cx = classNames.bind(styles);

export default function Header() {
	const { pathname } = useLocation();

	if (pathname === "/") {
		return (
			<header className={cx("container")}>
				<Link to={'/info'} title={"etf.kr 정보"}>etf.kr 정보</Link>
				<div className={cx("block")} />
				<Profile />
			</header>
		)
	}
	else if (pathname === "/info") {
		return (
			<header className={cx("container", "top")}>
				<Logo sz={"header"} link />
				<div className={cx("block")} />
				<Profile />
			</header>
		)
	}
	else {
		return (
			<header className={cx("container", "top")}>
				<Search />
				<Profile />
			</header>
		)
	}
}