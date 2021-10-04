//import React from 'react';
import {HashRouter, Route, Switch} from "react-router-dom";
import Layout from "@components/layout";

import home from "./home";
import patients from "./patients";
import cases from "./cases";

export default function Pages() {

    return (
        <HashRouter>
            <Layout>
                <Switch>
                    <Route exact path="/" component={home}/>
                    <Route exact path="/patients" component={patients}/>
                    <Route exact path="/cases" component={cases}/>
                </Switch>
            </Layout>
        </HashRouter>
    );
};