import React, {useCallback, useMemo} from "react";
import classNames from "classnames/bind";
import styles from "./ResultParagraph.module.scss";
import { ETF } from "define";

interface Props {
	etf: ETF
}

const cx = classNames.bind(styles);

export default function ResultParagraph({ etf }:Props) {
	const tags = useMemo(() => {
		if(etf.tags.length < 1) return <p className={cx("opterator")}>{etf.operator}</p>;

		return (
			<p className={cx("opterator")}>
				<span className={cx("opterator")}>{etf.operator}</span>
				<span className={cx('tags')}>{etf.tags.map((item, idx) => <span className={cx("tag")} key={idx}>{item}</span>)}</span>
			</p>
		)
	}, [etf.tags, etf.operator])

	const onClick = useCallback(() => {
		window.open(etf.link)
	}, [etf.link])

	return (
		<section className={cx("Result")}>
			{tags}
			<h1 className={cx("header")} onClick={onClick}>
				{`${etf.name} (${etf.ticker})`}
			</h1>
			<article className={cx("article")}>
				<div className={cx("detail")}>
					<p>
						<span className={cx("title")}>운용보수</span>
						<span className={cx("data")}>{etf.fee}</span>
					</p>
					<p>
						<span className={cx("title")}>배당금</span>
						<span className={cx("data", "fee", etf.distribution==="지급" ? "active":"deactive")}>
							{etf.distribution}
						</span>
					</p>
				</div>
				<p className={cx("explain")}>{etf.explain}</p>
			</article>
		</section>
	)
}