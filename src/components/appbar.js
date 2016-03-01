import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import _AppBar from 'material-ui/lib/app-bar'
import Styles from './style.css'

export default class Appbar extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return(
            <_AppBar
                title='Material UI Demo Page'
                zDepth={0}
            />
        )
    }
}
