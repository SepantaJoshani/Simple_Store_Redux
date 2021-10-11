import React from 'react'
import { Field , ErrorMessage} from 'formik'
import TxtError from './TxtError'

const Input = ({label,name,...rest}) => {
    return (
        <div>
            <label htmlFor={name}>{label}</label>
            <Field id={name} name={name}{...rest} />
            <ErrorMessage name={name} component={TxtError} />
        </div>
    )
}

export default Input
