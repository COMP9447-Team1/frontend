import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Box,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import MenuIcon from "@material-ui/icons/Menu";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";

const useStyles = makeStyles((theme) => ({
  text: {
    color: "#3f51b5",
    width: "90%",
  },
}));

function RemoveButton({ id, updateList }) {
  const clickHandle = () => {
    fetch(process.env.REACT_APP_API_URL + "/delete", {
      method: "POST",
      mode: "cors",
      body: JSON.stringify({ id }),
    }).catch((e) => console.log(e));
    updateList(id);
  };

  return (
    <IconButton color="primary" onClick={clickHandle}>
      <RemoveIcon />
    </IconButton>
  );
}

function AddButton({ id, updateList }) {
  const clickHandle = () => {
    fetch(process.env.REACT_APP_API_URL + "/add", {
      method: "POST",
      mode: "cors",
      body: JSON.stringify({ id }),
    }).catch((e) => console.log(e));
    updateList(id);
  };

  return (
    <IconButton color="primary" onClick={clickHandle}>
      <AddIcon />
    </IconButton>
  );
}

export default function Remediation({ name, id, active, updateList }) {
  const classes = useStyles();

  return (
    <Box
      display="flex"
      justify-content="flex-start"
      alignItems="center"
      flexDirection="row"
      flexWrap="nowrap"
    >
      <Typography className={classes.text}>{id}</Typography>
      {active ? (
        <RemoveButton {...{ id, updateList }} />
      ) : (
        <AddButton {...{ id, updateList }} />
      )}
    </Box>
  );
}
