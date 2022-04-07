import React from "react";
import classNames from "classnames/bind";
import styles from "./Info.module.scss"
import { Page } from "components/atoms";
import Header from "components/templates/Header";
import { useInfo } from "hooks";

const cx = classNames.bind(styles);

export default function InfoPage() {
	const etf = useInfo();

	return (
		<>
			<Header path={"info"} />
			<Page>
				{
					!!etf &&
					<article className={cx("box")}>
						<header className={cx("header")}>
							<h1>{etf.name}</h1>
							<p className={cx("ticker")}>{`(${etf.ticker})`}</p>
							<p className={cx("explain")}>{etf.explain}</p>
						</header>
						<section className={cx("information", "sector")}>
							<h2 className={cx("subtitle")}>상품정보</h2>
							<article className={cx("index")}>
								<h3 className={cx("subtitle")}>기초지수정보</h3>
								<p className={cx("title")}>{etf.detail.index.title}</p>
								<p className={cx("info")}>{etf.detail.index.info}</p>
							</article>
							<article className={cx("basic")}>
								<h3 className={cx("subtitle")}>기본정보</h3>
								<p><span>순자산 총액</span>{etf.detail.basic.asset}</p>
								<p><span>상장일</span>{etf.detail.basic.date}</p>
								<p><span>총보수</span>{`${etf.detail.basic.fee}%`}</p>
								<p><span>분배금 지급</span>{etf.detail.basic.distribution ? "지급" : "미지급"}</p>
							</article>
						</section>
						<section className={cx("investment", "sector")}>
							<h2 className={cx("subtitle")}>투자종목정보</h2>
							{
								etf.detail.Top10.map((item, index) => <p key={index}>{item.category}</p>)
							}
						</section>
						<p className={cx("")}>InfoPage</p>
					</article>
				}
			</Page>
		</>
	)
}