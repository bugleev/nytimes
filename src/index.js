import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import UIkit from 'uikit'
import Icons from 'uikit/dist/js/uikit-icons';
import 'uikit/dist/css/uikit.css';

// loads the Icon plugin

import App from './containers/App';
import registerServiceWorker from './registerServiceWorker';
UIkit.use(Icons);

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
