import React from 'react';
import useReactRouter from 'use-react-router';
import * as qs from 'query-string';
import {useAuth} from "../store/auth";

const CallbackContainer = () => {
    const {history, location} = useReactRouter();
    const [loginUrl, token, {handleAuthCode}] = useAuth();

    console.log('callback location info');

    console.log(qs.parse(location.search).code);

    if(token === undefined && token !== "") {
        console.log('token received!');
        console.log(token);
        let code = qs.parse(location.search).code;
        handleAuthCode(code);
    }

    return (
        <div>
            Callback
        </div>
    )
};

export default CallbackContainer;
