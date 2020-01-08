import React from 'react';
import Menu from "./menu.pres";
import {useLocations} from "../store/locations";
import useReactRouter from "use-react-router";

const MenuContainer = () => {
    const {locations} = useLocations();
    const {history} = useReactRouter();

    const goToLocations = () => {
        history.push("/");
    };
    return (
        <Menu
            locations={locations}
            showLocations={goToLocations}
        />
    )
};

export default MenuContainer;
