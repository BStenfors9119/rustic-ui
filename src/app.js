import React, {useEffect} from 'react';
import {hot} from 'react-hot-loader';
import './app.css';
import Store from './store.js';
import CustomBrowserRouter from "./app.router";
import * as env from './env.json';

const initialState = {
    locations: [],
    envVars: env.default[process.env.NODE_ENV]
};

const App = () => {
    return(
        <Store.Provider initialState={initialState}>
            <CustomBrowserRouter/>
        </Store.Provider>
    )
};

export default hot(module)(App);
