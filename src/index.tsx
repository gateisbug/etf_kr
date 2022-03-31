import * as ReactDOMClient from 'react-dom/client';
import { HashRouter } from "react-router-dom";
import 'styles/common.scss';
import App from 'App';

const rootElement = document.getElementById('root');
if (!rootElement) throw new Error('Failed to find the root element');

const root = ReactDOMClient.createRoot(rootElement);

root.render(
	<HashRouter basename={'/'}><App /></HashRouter>
)


//
// ReactDOM.render(
// 	<HashRouter basename={process.env.PUBLIC}><App /></HashRouter>,
// 	document.getElementById('root')
// );