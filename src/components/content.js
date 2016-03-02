import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Styles from './style.css'

export default class Content extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return(
            <div className={Styles.content}>Hell Material-UI!</div>
        )
    }
}
