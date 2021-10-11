import React from 'react'

const TxtError = ({children}) => {
    return (
        <p className='text-red-700 '>
            {children}
        </p>
    )
}

export default TxtError
