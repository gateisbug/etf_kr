export type func = ()=>any

export type Path = "home" | "search" | "info" | "list" | "about";

export interface ETF {
	operator: string;
	name: string;
	ticker: string;
	explain: string;
	detail: ETFDetail;
	tags: string[];
	link: string;
}

interface ETFDetail {
	index: IndexInfo;
	basic: ETFBasic;
	Top10: Investment[]
}

interface IndexInfo {
	title: string;
	info: string;
}

interface ETFBasic {
	asset: number|string;
	date: string;
	fee: number;
	distribution: boolean;
}

interface Investment {
	category: string;
	ticker: string;
	size: number;
}