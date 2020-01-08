import React, { useState, useEffect } from 'react';
import axios from 'axios';

export const useGetAxios = (url, defaultData) => {
    const [data, updateData] = useState(defaultData);

    useEffect( () => {
        async function getData() {
            const resp = await axios.get(url);
            console.log('useEffect axios resp');
            console.log(resp);

            updateData(resp.data);
        }
        getData();
    }, [url]);

    return data;
};