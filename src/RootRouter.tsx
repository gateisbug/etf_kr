import { Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import ListPage from "pages/ListPage";
import SearchPage from "pages/SearchPage";

export default function RootRouter() {
	return (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/list" element={<ListPage />} />
			<Route path="/search" element={<SearchPage />} />
			<Route path="/search/:value" element={<SearchPage />} />
			{/*<Route path="/nyse" element={"NYSE"} />*/}
		</Routes>
	)
}