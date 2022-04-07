import { Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import ListPage from "pages/ListPage";
import InfoPage from "pages/InfoPage";
import SearchPage from "pages/SearchPage";
import AboutPage from "./pages/AboutPage";

export default function RootRouter() {
	return (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/about" element={<AboutPage />} />
			<Route path="/list" element={<ListPage />} />
			<Route path="/info" element={<InfoPage />} />
			<Route path="/info/:value" element={<InfoPage />} />
			<Route path="/search" element={<SearchPage />} />
			<Route path="/search/:value" element={<SearchPage />} />
			{/*<Route path="/nyse" element={"NYSE"} />*/}
		</Routes>
	)
}