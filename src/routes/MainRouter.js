import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import HockeyTracker from '../components/HockeyTracker';
import BaseballTracker from '../components/BaseballTracker';
import Header from '../components/Header';
import AboutPage from '../components/AboutPage';
import NotFoundPage from '../components/NotFoundPage';
import PlayerPage from '../components/PlayerPage';
import ViewHockeyPlayerPage from '../components/ViewHockeyPlayerPage';
import ViewBaseballPlayerPage from '../components/ViewBaseballPlayerPage';

const MainRouter = (props) => {
    return (
        <div>
            <Header>Free Agent Tracker</Header>
            <BrowserRouter>
                <Switch>
                    <Route path="/" component={BaseballTracker} exact={true} />
                    <Route path="/hockey" component={HockeyTracker} exact={true} />
                    <Route path="/hockey/:playerid/" component={ViewHockeyPlayerPage} />
                    <Route path="/baseball" component={BaseballTracker} exact={true} />
                    <Route path="/baseball/:playerid/" component={ViewBaseballPlayerPage} />
                    <Route path="/about" component={AboutPage} exact={true} />
                    <Route component={NotFoundPage} />
                </Switch>
            </BrowserRouter>
        </div>
    );
}

export default MainRouter;