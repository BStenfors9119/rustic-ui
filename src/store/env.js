import Store from '../store';
import * as env from '../env.json';

export function useEnv() {
    const [{envVars}, setState] = Store.useStore();

    const loadEnvVars = () => {
        console.log('trying to load env vars');
      setState(draft => {
          draft.envVars = env.default[process.env.NODE_ENV];
      })
    };


    return [
        envVars,
        {
            loadEnvVars
        }

    ]
}
