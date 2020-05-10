import React, {FC} from "react";
import { HashRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import styles from "./App.modules.css";
import {PrivateRoute} from "../_components/PrivateRoute";
import {HomePage} from "../pages/home/HomePage";
import {LoginPage} from "../pages/login/LoginPage";
import {LandingPage} from "../pages/landing/LandingPage";
import {RegisterPage} from "../pages/register/RegisterPage";

export const App: FC = () => {

    return <div className={styles.Container}>
        <Router>
            <Switch>
                <Route path="/landing" component={LandingPage} />
                <Route path="/login" component={LoginPage} />
                <Route path="/register" component={RegisterPage} />
                <PrivateRoute exact path="/" component={HomePage} />
                <Redirect from="*" to="/" />
            </Switch>
        </Router>
    </div>
};
