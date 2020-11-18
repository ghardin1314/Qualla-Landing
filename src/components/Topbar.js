import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import { Grid, Link, Tooltip, Hidden } from "@material-ui/core";
import { useSnackbar } from "notistack";
// import CustomTooltip from "./Details/CustomTooltip";

const useStyles = makeStyles((theme) => ({
  topbar: {
    display: "flex",
    direction: "row",
    margin: "auto",
    width: "100%",
    marginTop: theme.spacing(6),
    justifyContent: "bottom",
  },
  title: {
    marginLeft: 0
  },
  grow: {
    display: "flex",
    direction: "row",
    marginLeft: "auto",
    verticalAlign: "text-bottom",
  },
  content: {
    verticalAlign: "bottom",
  },
}));

export default function Topbar() {
  const classes = useStyles();
  const { enqueueSnackbar } = useSnackbar();

  const handleClick = () => {
    enqueueSnackbar("Coming Soon...")
  }

  return (
    <div className={classes.topbar}>
      <Typography className={classes.title} variant="h4">
        <b>Qualla</b>
      </Typography>
      <div className={classes.grow}>
        <Hidden smDown>
          <Grid
            container
            spacing={4}
            className={classes.content}
            alignItems="flex-end"
          >
            <Grid item component={Typography} variant="h6">
              <Tooltip title="Coming Soon..." arrow>
                <Link color="inherit" onClick={handleClick}>Try the demo</Link>
              </Tooltip>
            </Grid>
            <Grid item component={Typography} variant="h6">
              <Link href="" color="inherit">
                Get creative freedom
              </Link>
            </Grid>
          </Grid>
        </Hidden>
      </div>
    </div>
  );
}
