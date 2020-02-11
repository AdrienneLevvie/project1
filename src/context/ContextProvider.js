import React, {
    useReducer
} from 'react'
import { SidebarContext, reducer as SidebarReducer } from './SidebarContext'
import { PatientDataContext, PatientDataReducer } from './DataProvider'

export default (props) => {
    const [sidebarState, sidebarDispatch] = useReducer(SidebarReducer, false)
    const [patientDataState, patientDataDispatch] = useReducer(PatientDataReducer, [])

    const sidebarData = {
        state: sidebarState,
        option: sidebarDispatch
    }

    const patientData = {
        state: patientDataState,
        option: patientDataDispatch
    }
    return (
        <PatientDataContext.Provider value={patientData}>
        <SidebarContext.Provider value={sidebarData}>
            {props.children}
        </SidebarContext.Provider>
        </PatientDataContext.Provider>
    )
}