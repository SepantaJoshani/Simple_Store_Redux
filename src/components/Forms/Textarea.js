import React from 'react'
import { Field,ErrorMessage } from 'formik'
import TxtError from './TxtError'

const Textarea = ({className,label,name,...rest}) => {
    return (
        <div className={className}>
            <label htmlFor={name}>{label}</label>
            <Field as='textarea' id={name} name={name} {...rest}  />
            <ErrorMessage name={name} component={TxtError} />
        </div>
    )
}

export default Textarea
