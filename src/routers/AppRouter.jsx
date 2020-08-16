import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from "react-router-dom";
import PokeNavbar from "../components/ui/PokeNavbar";
import SearchScreen from "../components/screens/SearchScreen";
import HomeScreen from "../components/screens/HomeScreen";

const AppRouter = () => {
    return (
        <Router basename={'/pokedex-react/'}>
            <div>
                <PokeNavbar/>
                <Switch>
                    <Route exact path="/buscar" component={ SearchScreen }/>
                    <Route path="/" component={ HomeScreen }/>
                </Switch>
                <Redirect to="/"/>
            </div>
        </Router>
    );
};

export default AppRouter;
