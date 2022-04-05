import React from "react";
import classNames from "classnames/bind";
import styles from "./Header.module.scss";

const cx = classNames.bind(styles);

export default function Profile() {
	return (
		<div className={cx("right")}>
			<a href="https://github.com/gateisbug/etf_kr" target={"_blank"} title={"gitHub"}>
				<img className={cx("icon")} src={"https://avatars.githubusercontent.com/u/63226802?v=4"} alt={"gitHub"} />
			</a>
		</div>
	)
}