import { useState } from 'react'

export const useForm = inititalValues => {
    const [ credentials, handleChange ] = useState(inititalValues)
    return [credentials, e => {
        handleChange({
            ...credentials,
            [`e.target.name`]: e.target.value
        });
    }]
}