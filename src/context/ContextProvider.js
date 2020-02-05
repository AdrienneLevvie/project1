import React, {
    useReducer
} from 'react'
import { SidebarContext, reducer } from './SidebarContext'


export default (props) => {
    const [sidebarState, sidebarDispatch] = useReducer(reducer, false)
    const sidebarData = {
        state: sidebarState,
        option: sidebarDispatch
    }
    return (
        <SidebarContext.Provider value={sidebarData}>
            {props.children}
        </SidebarContext.Provider>
    )
}