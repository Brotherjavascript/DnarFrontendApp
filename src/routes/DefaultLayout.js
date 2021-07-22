import React from 'react';
import {BrowserRouter, Switch, Redirect, Route,HashRouter} from 'react-router-dom';
import routes from './routes'
import SideNav from "../components/sideNav/SideNav";
import TopNav from "../components/topNav/TopNav";

function DefaultLayout() {

    return (
        <>
            <TopNav/>
            <SideNav/>
            <div className="container">
                <HashRouter>
                    <Switch>
                        {routes.map((route, index) => (
                            <Route key={index} exact={true} path={route.path}>
                                {
                                    route.component
                                }
                            </Route>
                        ))}
                        <Redirect to="/dashboard"/>
                    </Switch>
                </HashRouter>
            </div>
        </>
    )
};
export default DefaultLayout
