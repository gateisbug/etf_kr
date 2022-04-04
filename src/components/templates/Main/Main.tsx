import React from "react";
import classNames from "classnames/bind";
import styles from "./Main.module.scss";
import { Logo, Search, Button } from "components/atoms";

const cx = classNames.bind(styles);

export default function Main() {
	return (
		<section className={cx("container")}>
			<Logo />
			<section className={cx("box")}>
				<Search />
				<div className={cx("button-box")}>
					<Button>hello</Button>
					<Button>hello2</Button>
				</div>
			</section>
		</section>
	)
}