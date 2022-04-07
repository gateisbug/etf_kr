import React, { useMemo } from "react";
import classNames from "classnames/bind";
import styles from "./Header.module.scss";
import { Link, Logo } from "components/atoms";
import Profile from "./Profile";
import Search from "./Search";

interface Props {
	path?: "home"|"search"|"info"|"list";
}

const cx = classNames.bind(styles);

export default function Header({ path="home" }:Props) {
	const ConditionalRendering = useMemo(() => {
		switch (path) {
			case "search":
				return ( <Search /> );
			case "info": case "list":
				return ( <><Logo sz={"header"} link /><Block /></> );
			default:
				return ( <><Link to={'/info'} title={"etf.kr 정보"}>etf.kr 정보</Link><Block /></> )
		}
	}, [path])

	return (
		<header className={cx("container", path !== "home" && "top")}>
			{ ConditionalRendering }
			<Profile />
		</header>
	)
}

function Block() {
	return (
		<div className={cx("block")} />
	)
}