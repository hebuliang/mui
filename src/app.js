import React from 'react'
import { render } from 'react-dom'
import injectTapEventPlugin from 'react-tap-event-plugin'
import Appbar from './components/appbar'
import Navbar from './components/navbar'
import Content from './components/content'

injectTapEventPlugin()

render(
    <div className='container'>
        <Appbar />
        <Navbar />
        <Content/>
    </div>,
    document.querySelector('#main')
)