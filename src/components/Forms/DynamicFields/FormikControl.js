import React from 'react'
import Input from './Input'
import Select from './Select'
import Textarea from './Textarea'

const FormikControl = ({control,...rest}) => {
    
        switch (control) {
            case 'input' : return <Input {...rest} />
            case 'textarea' :return <Textarea {...rest} />
            case 'select':return <Select {...rest} />
                
                
        
            default: return null
                
        }
    
}

export default FormikControl
