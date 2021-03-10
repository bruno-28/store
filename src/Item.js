import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    width: "100%",
    height: "100%",
    border: "1px solid lightblue",
    borderRadius: "20px",
  },
  title: {
    fontSize: 16,
  },
  description: {
    fontSize: 12,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function Item() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography class={classes.title}>Name of item</Typography>
        <Typography>Image of item</Typography>
        <Typography class={classes.description}>Description of item</Typography>
        <Typography>Price of item</Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Add to cart</Button>
      </CardActions>
    </Card>
  );
}
