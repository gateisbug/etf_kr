export type func = ()=>any

export type Path = "home" | "search" | "list";

export interface ETF {
	operator: string;
	name: string;
	ticker: string;
	explain: string;
	index: string;
	fee: string;
	distribution: string;
	tags: string[];
	link: string;
	priority?: number;
}