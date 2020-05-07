import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from "react-redux";
import {BrowserRouter} from "react-router-dom";
import store from "./store";

import App from './components/app/App';
import ErrorBoundry from "./components/error-boundry/erorror-boundry";

ReactDOM.render(
    <Provider store={store}>
        <ErrorBoundry>
            <BrowserRouter>
                <App/>
            </BrowserRouter>
        </ErrorBoundry>
    </Provider>
    , document.getElementById('root')
);