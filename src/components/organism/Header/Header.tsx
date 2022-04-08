import React, { useMemo } from "react";
import classNames from "classnames/bind";
import styles from "./Header.module.scss";
import { Path } from "define";
import Search from "./Search";
import Profile from "./Profile";

interface Props {
	path?: Path;
}

const cx = classNames.bind(styles);

export default function Header({ path="home" }:Props) {
	const ConditionalRendering = useMemo(() => {
		switch (path) {
			case "search": case "list":
				return ( <Search /> );
			default:
				return ( <><Block /></> )
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