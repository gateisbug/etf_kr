import React from 'react';
import classNames from "classnames/bind";
import styles from "styles/App.module.scss";
import RootRouter from "RootRouter";
import Footer from "components/templates/Footer";

const cx = classNames.bind(styles);

function App() {
	return (
		<div className={cx("App")}>
			<RootRouter />
			<Footer />
		</div>
	);
}

export default App;
