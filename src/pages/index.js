//import React from 'react';
import {HashRouter, Route, Switch} from "react-router-dom";
import Layout from "@components/layout";

import home from "./home";
import patients from "./patients";

export default function Pages() {

    const routes = [
        {'home': '/'},
        {'patients': '/patients'}
    ]

    return (
        <HashRouter>
            <Layout>
                <Switch>
                    <Route exact path="/" component={home}/>
                    <Route exact path="/patients" component={patients}/>
                </Switch>
            </Layout>
        </HashRouter>
    );
};