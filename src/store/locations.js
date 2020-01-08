import Store from '../store.js';
import axios from "axios";

export function useLocations() {
    const [{locations}, setState] = Store.useStore();
    const locationUrl = "http://127.0.0.1:4114";

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
