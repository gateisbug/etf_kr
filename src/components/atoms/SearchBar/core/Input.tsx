import React from "react";
import classNames from "classnames/bind";
import styles from "../Search.module.scss";

interface Props {
	Ref: React.LegacyRef<HTMLInputElement>;
	onChange: any;
	defaultValue: string;
}

const cx = classNames.bind(styles);

export default function Input({ Ref, onChange, defaultValue }:Props) {
	return (
		<div className={cx("input")}>
			<input ref={Ref} type="text" onChange={onChange} defaultValue={defaultValue} title={"검색"}/>
		</div>
	)
}