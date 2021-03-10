import TopBar from "./TopBar";
import ItemList from "./ItemList";
import Grid from "@material-ui/core/Grid";

const App = () => {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <TopBar />
      </Grid>
      <Grid item xs={12} style={{ margin: "20px" }}>
        <ItemList />
      </Grid>
    </Grid>
  );
};

export default App;
