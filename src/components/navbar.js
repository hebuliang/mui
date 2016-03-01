import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import LeftNav from 'material-ui/lib/left-nav'
import Divider from 'material-ui/lib/divider'
import Styles from './style.css'

export default class Navbar extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return(
            <LeftNav>
                <div>Item 1</div>
                <Divider />
                <div>Item 2</div>
                <Divider />
                <div>Item 3</div>
                <Divider />
            </LeftNav>
        )
    }
}
