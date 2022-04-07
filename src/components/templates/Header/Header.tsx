import React, { useMemo } from "react";
import classNames from "classnames/bind";
import styles from "./Header.module.scss";
import { Path } from "define";
import { Link, Logo } from "components/atoms";
import Search from "./Search";
import Profile from "./Profile";

interface Props {
	path?: Path;
}

const cx = classNames.bind(styles);

export default function Header({ path="home" }:Props) {
	const ConditionalRendering = useMemo(() => {
		switch (path) {
			case "search": case "list": case "info":
				return ( <Search /> );
			case "about":
				return ( <><Logo sz={"header"} link /><Block /></> );
			default:
				return ( <><Link to={'/about'} title={"etf.kr 정보"}>etf.kr 정보</Link><Block /></> )
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