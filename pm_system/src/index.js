import React from 'react';
import ReactDOM from 'react-dom';

import './assets/bootstrap-3.3.7/css/bootstrap.min.css';
import 'antd/dist/antd.min.css'
import './index.css';
//import App from './App';
import {RootRouter} from './config/router/RouterConfig';
import registerServiceWorker from './registerServiceWorker';

// function listen () {
//     if (document.readyState == 'complete') { // 资源加载完成
//         ReactDOM.render(<App />, document.getElementById('root'));
//     } else { // 资源加载中
//         ReactDOM.render(<RouterConfig />, document.getElementById('root'));
//     }
// }

 ReactDOM.render(<RootRouter />, document.getElementById('root'));
// document.onreadystatechange = listen;
registerServiceWorker();
