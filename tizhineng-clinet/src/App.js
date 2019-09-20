import React, { Component } from 'react'
import {Provider} from "react-redux"
import store from "./store/"
import {BrowserRouter} from "react-router-dom"
import RouterView from "./router/routerView"
import '@/styles/jf.scss'
export default class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <BrowserRouter>
                    <RouterView />
                </BrowserRouter>
            </Provider>
        )
    }
}