import React, {useEffect} from 'react';
import Locations from "./locations.pres";
import {useLocations} from "../store/locations";
import useReactRouter from 'use-react-router';
import {useAuth} from "../store/auth";
import {useEnv} from '../store/env.js';

const LocationsContainer = () => {
    const [locations, {refresh}] = useLocations();
    const [envVars, {loadEnvVars}] = useEnv();
    const [loginUrl, token, {logIn}] = useAuth();
    const {history} = useReactRouter();

    const goToMenus = () => {
        history.push("/menus");
    };



    useEffect(() => {
        loadEnvVars();
        if(loginUrl !== undefined) {
            let authUrl = loginUrl.data.authUrl;

            console.log('login url');
            console.log(loginUrl);
            window.location.assign(authUrl);
        }

    }, [loginUrl]);

    return (
        <div>
            <Locations
                locations={locations}
                refreshLocations={refresh}
                showMenus={goToMenus}
                logIn={logIn}
            />
        </div>

    )
};

export default LocationsContainer;
