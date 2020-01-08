import React from 'react';

const AppContext = React.createContext({
    locations:[],
    loadLocations: () => {},
    refreshLocations: () => {}
});

export default AppContext;