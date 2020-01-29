import React from 'react'
import {Link} from 'react-router-dom'

export default props => {
    return (
        <Link to={props.route} style={{textDecoration: 'none', color: 'black'}}>
            {props.children}
        </Link>
    )
}