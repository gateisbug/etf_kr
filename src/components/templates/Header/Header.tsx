import React from "react";
import classNames from "classnames/bind";
import styles from "./Header.module.scss";
import { Link } from "components/atoms";
import {useLocation} from "react-router-dom";

const cx = classNames.bind(styles);

export default function Header() {
	const { pathname } = useLocation();
	// console.log(pathname)

	return (
		<header className={cx("container")}>
			{
				pathname === "/" && <Link to={'/info'} title={"etf.kr 정보"}>etf.kr 정보</Link>
			}

			<div className={cx("right")}>
				<a href="https://github.com/gateisbug/etf_kr" target={"_blank"} title={"gitHub"}>
					<img className={cx("icon")} src={"https://avatars.githubusercontent.com/u/63226802?v=4"} alt={"gitHub"} />
				</a>
			</div>
		</header>
	)
}