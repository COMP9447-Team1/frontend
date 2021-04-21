import React from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { NavBar } from "./components/navbar";
import { Remediations } from "./pages/remediations";
import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";
import Amplify from "aws-amplify";
import awsconfig from "./aws-exports";
import { AmplifyAuthenticator } from "@aws-amplify/ui-react";

Amplify.configure(awsconfig);

const theme = createMuiTheme({
  palette: {
    primary: {
      // Purple and green play nicely together.
      main: "#3f51b5",
    },
    secondary: {
      // This is green.A700 as hex.
      main: "#11cb5f",
    },
  },
});

function App() {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <AmplifyAuthenticator>
          <NavBar />
          <Switch>
            <Route exact path="/">
              <Redirect to="/remediations" />
            </Route>
            <Route path="/remediations">
              <Remediations />
            </Route>
          </Switch>
        </AmplifyAuthenticator>
      </ThemeProvider>
    </Router>
  );
}

export default App;
