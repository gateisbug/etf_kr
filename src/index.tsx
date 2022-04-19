import ReactDOM from 'react-dom';
import { HashRouter } from "react-router-dom";
import 'styles/common.scss';
import App from 'App';

// const rootElement = ;
// if (!rootElement) throw new Error('Failed to find the root element');

// @ts-ignore
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
	<HashRouter basename={'/'}><App /></HashRouter>
)


// https://huemint.com/bootstrap-basic/#palette=f7f1c3-ffffff-0e0601-1a306b-fb495e-caa63d
// https://www.maveron.com/
// https://www.scalevp.com/
// https://www.direxion.com/

// ReactDOM.render(
// 	<HashRouter basename={process.env.PUBLIC}><App /></HashRouter>,
// 	document.getElementById('root')
// );