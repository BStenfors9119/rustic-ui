import React from 'react';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import Grid from "@material-ui/core/Grid";
import {Button, List, ListItem, ListItemText} from "@material-ui/core";

const Menu = (props) => {
    const {locations, showLocations } = props;

    console.log('menu locations');
    console.log(locations);

    let locationItems = () => {
        let items = [];
        if(locations === undefined) {
            return (
                <ListItem key={9999}>
                    <ListItemText primary='No locations'/>
                </ListItem>
            )
        }else {

            items = locations.map((location, idx) => {
                return (
                    <ListItem key={idx}>
                        <ListItemText primary={location.name}/>
                    </ListItem>
                )
            });

        }
        return items;
    };

    return (
        <Grid container direction="column">
            <Grid container direction="row">
                <Grid item lg={11}>
                    <Typography variant="subheading">List of menus goes here.</Typography>
                </Grid>
                <Grid item lg={1}>
                    <Button onClick={() => showLocations()}>Locations</Button>
                </Grid>
            </Grid>
            <Divider />
            <Grid container direction="row">
                <Grid item lg={12}>
                    <List>
                        {locationItems()}
                    </List>
                </Grid>
            </Grid>
        </Grid>
    )
};

export default Menu;