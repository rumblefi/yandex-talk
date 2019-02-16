import React from 'react'
import Header from '../Header/Header'
import '../../index.css'
import './App.css'
import {Router} from "@reach/router";
import SchedulerComponent from '../SchedulerComponent/SchedulerComponent'
import Meeting from '../Meeting/Meeting'

export default class App extends React.Component {

    render() {
        return (
            <div className="app">
                <div className="app__top">
                    <Header/>
                </div>
                <div className="app__main">
                    <Router>
                        <SchedulerComponent path="/"/>
                        <Meeting path="/meeting"/>
                    </Router>
                </div>

            </div>
        )
    }

}