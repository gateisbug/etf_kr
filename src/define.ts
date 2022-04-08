export type func = ()=>any

export type Path = "home" | "search" | "list";
type Tag = "국내주식" | "해외주식" | "채권" | "원자재 및 통화" | "레버리지/인버스" | "혼합자산" | "부동산"
				| "업종" | "팩터" | "전략/테마" | "시장지수";
type Operator = "삼성투자증권";

export interface ETF {
	operator: Operator;
	name: string;
	ticker: string;
	explain: string;
	index: string;
	detail: ETFBasic;
	tags: Tag[];
	link: string;
}

interface ETFBasic {
	fee: number;
	distribution: boolean;
}