import React from 'react'
import { Field , ErrorMessage} from 'formik'
import TxtError from './TxtError'

const Input = ({className,label,name,...rest}) => {
    return (
        <div className={className}>
            <label htmlFor={name}>{label}</label>
            <Field id={name} name={name} {...rest} />
            <ErrorMessage name={name} component={TxtError} />
        </div>
    )
}

export default Input
