import React from "react";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Remediation } from "../../components/Remediation";
import { Typography } from "@material-ui/core";

const defaultRemediations = [
  {
    id: "enable-auto-vpc-flowlogging",
    active: false,
  },
  {
    id: "enable-default-serverside-s3-bucket-encryption",
    active: true,
  },
  {
    id: "EC2",
    active: false,
  },
];

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "0 50px",
  },
  heading: {
    color: theme.palette.primary.main,
    padding: "20px",
  },
  list: {
    textAlign: "center",
  },
}));

export default function Remediations() {
  const classes = useStyles();
  const [remediations, updateRemediations] = React.useState(
    defaultRemediations,
    []
  );

  const updateList = (id) => {
    console.log("updating", id);
    updateRemediations(
      remediations.map((r) => (r.id === id ? { ...r, active: !r.active } : r))
    );
  };

  return (
    <div className={classes.root}>
      <Grid container spacing={10}>
        {/* <Grid item xs={12}>
          <Paper className={classes.paper}>xs=12</Paper>
        </Grid> */}
        <Grid item xs={12} sm={6} className={classes.list}>
          <Typography variant="h3" className={classes.heading}>
            Active
          </Typography>
          {remediations
            .filter((r) => r.active)
            .map((r) => (
              <Remediation {...r} updateList={updateList} />
            ))}
        </Grid>
        <Grid item xs={12} sm={6} className={classes.list}>
          <Typography variant="h3" className={classes.heading}>
            Available
          </Typography>
          {remediations
            .filter((r) => !r.active)
            .map((r) => (
              <Remediation {...r} updateList={updateList} />
            ))}
        </Grid>
      </Grid>
    </div>
  );
}
