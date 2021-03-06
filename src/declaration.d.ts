declare module '*.scss' {
	const content: Record<string, string>;
	export default content;
}

declare module '*.svg' {
	const content: Record<SVGElement>;
	export default content;
}

declare module "*.json" {
	const content: any;
	export default content;
}