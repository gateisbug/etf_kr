import React from 'react';
import classNames from "classnames/bind";
import styles from "styles/App.module.scss";
import Aside from "components/templates/Aside";
import Header from "./components/templates/Header";
import RootRouter from "./RootRouter";

const cx = classNames.bind(styles);
const isMobile:boolean = false;

function App() {
	return (
		<div className={cx("App", isMobile?"M":"D")}>
			<Aside />
			<section className={cx("Section")}>
				<Header />
				<div className={cx("Contents")}>
					<RootRouter />
				</div>
			</section>
		</div>
	);
}

export default App;
