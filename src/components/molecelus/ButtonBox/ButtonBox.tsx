import React from "react";
import classNames from "classnames/bind";
import styles from "./ButtonBox.module.scss";
import { Button } from "components/atoms";

interface Props {
	onClickEvents: any[];
}

const cx = classNames.bind(styles);

export default function ButtonBox({ onClickEvents }:Props) {
	return (
		<div className={cx("button-box")}>
			<Button onClick={onClickEvents[0]}>etf.kr 검색</Button>
			<Button onClick={onClickEvents[1]}>etf List</Button>
		</div>
	)
}