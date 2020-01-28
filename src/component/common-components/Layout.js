import React from 'react'
import NavBar from '../header'
import { Container } from '@material-ui/core'
export default function(props){

    return (
        <React.Fragment>
        <NavBar />
            {props.children}
        </React.Fragment>
    )
}