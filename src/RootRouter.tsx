import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";

export default function RootRouter() {
	return (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/list" element={"list"} />
			<Route path="/info" element={"info"} />
			<Route path="/search" element={"search"} />
			<Route path="/search:value" element={"value"} />
			{/*<Route path="/nyse" element={"NYSE"} />*/}
		</Routes>
	)
}