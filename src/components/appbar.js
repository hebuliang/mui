import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import _AppBar from 'material-ui/lib/app-bar'
import EventIcon from 'material-ui/lib/svg-icons/action/event'
import Styles from './style.css'

export default class Appbar extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <_AppBar
                className={Styles.appbar}
                title='Material UI Demo Page'
                zDepth={0}
                iconElementRight={<EventIcon />}
            />
        )
    }
}
