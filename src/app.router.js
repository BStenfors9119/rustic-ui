import React from "react";
import LocationsContainer from './locations/locations.container';
import {BrowserRouter, Switch, Route} from "react-router-dom";
import MenuContainer from "./menu/menu.container";
import CallbackContainer from './auth/callback.container';

const CustomBrowserRouter = () => {
    return (
        <BrowserRouter>
            <Route path="/" exact component={LocationsContainer} />
            <Route path="/menus" component={MenuContainer} />
            <Route path="/callback" component={CallbackContainer} />
        </BrowserRouter>
    )
};

export default CustomBrowserRouter;
