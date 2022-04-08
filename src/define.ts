export type func = ()=>any

export type Path = "home" | "search" | "list";

export interface ETF {
	operator: string;
	name: string;
	ticker: string;
	explain: string;
	detail: ETFBasic;
	tags: string[];
	link: string;
}

interface ETFBasic {
	fee: number;
	distribution: boolean;
}