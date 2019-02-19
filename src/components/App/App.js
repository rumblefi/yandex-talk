import React from 'react'
import Header from '../Header/Header'
import 'normalize.css/normalize.css'
import '../../index.scss'
import './App.scss'
import {Router,Location} from "@reach/router";
import SchedulerComponent from '../SchedulerComponent/SchedulerComponent'
import Meeting from '../Meeting/Meeting'
import NotFound from '../NotFound/NotFound'
import posed, {PoseGroup} from 'react-pose'

const RouteContainer = posed.div({
    enter: {
        opacity: 1,
        delay: 50
    },
    exit: {
        opacity: 0
    }
});


const PosedRouter = ({ children }) => (
    <Location>
      {({ location }) => (
        <PoseGroup>
          <RouteContainer key={location.key}>
            <Router location={location}>{children}</Router>
          </RouteContainer>
        </PoseGroup>
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
                    <PosedRouter>
                        <SchedulerComponent path="/"/>
                        <Meeting path="meeting"/>
                        <NotFound default/>
                    </PosedRouter>
                </div>

            </div>
        )
    }

}