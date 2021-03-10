import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Item from "./Item";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
}));

export default function ItemList() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={4}>
          <Item />
        </Grid>
        <Grid item xs={12} sm={4}>
          <Item />
        </Grid>
        <Grid item xs={12} sm={4}>
          <Item />
        </Grid>
      </Grid>
    </div>
  );
}
