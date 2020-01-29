import React from 'react'
import NavBar from '../header'
export default function(props){

    return (
        <React.Fragment>
        <NavBar />
            {props.children}
        </React.Fragment>
    )
}