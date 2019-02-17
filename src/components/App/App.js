import React from 'react'
import Header from '../Header/Header'
import 'normalize.css/normalize.css'
import '../../index.scss'
import './App.scss'
import {Router, Link, Location} from "@reach/router";
import {TransitionGroup, CSSTransition} from "react-transition-group";
import SchedulerComponent from '../SchedulerComponent/SchedulerComponent'
import Meeting from '../Meeting/Meeting'
import NotFound from '../NotFound/NotFound'

const FadeTransitionRouter = props => (
    <Location>
        {({location}) => (
            <TransitionGroup className="transition-group">
                <CSSTransition key={location.key} classNames="fade" timeout={100}>
                    {/* the only difference between a router animation and
                any other animation is that you have to pass the
                location to the router so the old screen renders
                the "old location" */}
                    <Router location={location} className="router">
                        {props.children}
                    </Router>
                </CSSTransition>
            </TransitionGroup>
        )}
    </Location>
);

export default class App extends React.Component {

    render() {
        return (
            <div className="app">
                <div className="app__top">
                    <Header/>
                </div>
                <div className="app__main">
                    <FadeTransitionRouter>
                        <SchedulerComponent path="/"/>
                        <Meeting path="meeting"/>
                        <NotFound default/>
                    </FadeTransitionRouter>
                </div>

            </div>
        )
    }

}