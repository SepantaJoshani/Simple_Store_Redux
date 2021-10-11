import React from 'react'
import CheckoutForm from '../components/Forms/CheckoutForm/CheckoutForm'

const Checkout = () => {
    return (
      <div className="mt-10 md:py-28 lg:py-32 sm:mt-0">
      <div className="md:grid md:grid-cols-3 md:gap-6">
        <div className="md:col-span-1">
          <div className="px-4 sm:px-0 md:px-2">
            <h3 className="ml-1 text-lg font-medium text-gray-900 leading">Personal Information</h3>
            <p className="mt-1 text-sm text-gray-600">Use a permanent address where you can receive mail.</p>
          </div>
        </div>
        <div className="mt-5 md:mt-0 md:col-span-2">
          <CheckoutForm/>
        </div>
      </div>
    </div>
    )
}

export default Checkout
