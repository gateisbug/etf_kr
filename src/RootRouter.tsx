import { Routes, Route } from "react-router-dom";

export default function RootRouter() {
	return (
		<Routes>
			<Route path="/" element={"Home"} />
			<Route path="/krx" element={"KRX"} />
			<Route path="/nyse" element={"NYSE"} />
		</Routes>
	)
}