import React, { Fragment } from 'react'
import { Route, useHistory } from 'react-router'
import CartItem from '../components/CartItem/CartItem'
import InstaIcon from '../components/Icons/InstaIcon'
import products from '../products'

const Cart = () => {

    const history=useHistory()
    
    return (
        <Fragment>
        <div className="flex flex-col p-6 space-y-4 sm:p-10 dark:bg-coolGray-900 dark:text-coolGray-100">
      <h2 className="text-xl font-semibold">Your cart</h2>
      <ul className="flex flex-col divide-y divide-coolGray-700">
          {
              products.map(product=>(
                  <CartItem price={product.price} name={product.name} image={product.image} />
              ))
          }
    </ul>
    <div className="space-y-1 text-right sm:mx-auto sm:flex sm:flex-col sm:items-center">
		<p>Total amount:
			<span className="font-semibold sm:text-xl">$357</span>
		</p>
		<p className="text-sm dark:text-coolGray-400">Not including taxes and shipping costs</p>
	</div>
	<div className="flex justify-end space-x-4 sm:mx-auto md:space-x-9">
		<button type="button"  onClick={()=>history.push('/products')} className="px-6 py-2 bg-blue-400 border rounded-md dark:border-violet-400">Back
			<span className="sr-only sm:not-sr-only">to shop</span>
		</button>
		<button type="button" onClick={()=>history.push('/checkout')} className="px-6 py-2 bg-blue-400 border rounded-md dark:bg-violet-400 dark:text-coolGray-900 dark:border-violet-400">
			<span className="sr-only sm:not-sr-only">Continue to</span>Checkout
		</button>
	</div>
    </div>
    
          
    </Fragment>

    )
}

export default Cart
