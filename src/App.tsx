import React from 'react';
import classNames from "classnames/bind";
import styles from "styles/App.module.scss";
import Header from "./components/templates/Header";
import Main from "./components/templates/Main";
import Footer from "./components/templates/Footer";

const cx = classNames.bind(styles);

function App() {
	return (
		<div className={cx("App")}>
			<Header />
			<Main />
			<Footer />
			{/*<RootRouter />*/}
		</div>
	);
}

export default App;
