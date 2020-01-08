import Store from '../store.js';
import axios from 'axios';
import useReactRouter from "use-react-router";
import {useEnv} from "./env";

export function useAuth() {
    const [{loginUrl, token}, setState] = Store.useStore();
    const [envVars] = useEnv();
    const {history, location} = useReactRouter();
    const authUrl = envVars.authLoginUrl;
    const authCodeUrl = envVars.authLoginCallbackUrl;

    const logIn = async () => {

        console.log('env vars');
        console.log(envVars);

        const resp = await axios.get(authUrl);

        let result = resp;
        setState(draft => {
            draft.loginUrl = result
        })
    };

    const handleAuthCode = async (authCode) => {
        const payload = {
            code: authCode
        };
        const resp = await axios.post(authCodeUrl, payload);

        console.log('handle auth code');
        console.log(resp);

        let result = resp;
        setState(draft => {
            draft.token = result.data
        });

        if(result.data.access_token !== undefined) {
            history.push("/");
        }
    };

    return [
        loginUrl,
        token,
        {
            logIn,
            handleAuthCode
        }
    ]
}
