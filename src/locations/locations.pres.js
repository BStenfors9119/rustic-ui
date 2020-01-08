import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import {Button, Divider, List, ListItem, ListItemText} from "@material-ui/core";

const Locations = (props) => {
    const {locations, refreshLocations, showMenus, logIn} = props;

    console.log('Locations');
    console.log(props);
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
                <Grid item lg={9}>
                    <Typography variant="subheading">List of locations goes here.</Typography>
                </Grid>
                <Grid item lg={1}>
                    <Button onClick={() => refreshLocations()}>Refresh</Button>
                </Grid>
                <Grid item lg={1}>
                    <Button onClick={() => showMenus()}>Menus</Button>
                </Grid>
                <Grid item lg={1}>
                    <Button onClick={() => logIn()}>Log In</Button>
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

export default Locations;