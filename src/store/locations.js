import Store from '../store.js';
import axios from "axios";

export function useLocations() {
    const [{locations, envVars}, setState] = Store.useStore();
    const locationUrl = envVars.locationsUrl;

    const load = async () => {
        const resp = await axios.get(locationUrl);

        let result = resp.data;

        setState(draft => {
            draft.locations = result;
        });
    };

    const refresh = async () => {
        const resp = await axios.get(locationUrl);

        let result = resp.data;
        setState(draft => {
            draft.locations = result
        })
    };

    return [
        locations,
        {
            load,
            refresh
        }
    ]
}
