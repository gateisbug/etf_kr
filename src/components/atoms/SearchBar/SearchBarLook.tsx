import React from "react";
import classNames from "classnames/bind";
import styles from "./Search.module.scss";
import { Block, Clear, Icon, Input } from "./core";

interface Props {
	text: string;
	defaultValue: string;
	inputRef: React.LegacyRef<HTMLInputElement>;
	onChange: any;
	onClear: any;
}

const cx = classNames.bind(styles);

export default function Looks({ text, defaultValue, inputRef, onChange, onClear }:Props) {
	return (
		<div className={cx("container")}>
			<div className={cx("box")}>
				<Icon />
				<Input Ref={inputRef} onChange={onChange} defaultValue={defaultValue} />
				{
					(text.length > 0 || defaultValue?.length > 0)
						? <Clear onClear={onClear} /> : <Block />
				}
			</div>
		</div>
	)
}