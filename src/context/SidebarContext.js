import {
    createContext
} from 'react'


export const SidebarContext = createContext()

export function reducer(state, action){
    switch(action.type){
        case 'OPEN':
            return state = true
        case 'CLOSE':
            return state = false
        default:
            return state
    }
}
