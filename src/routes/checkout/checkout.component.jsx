import { useContext } from 'react'

import { CartContext } from '../../contexts/cart.context'

import CheckoutItem from '../../components/checkout-item/checkout-item.component'

import { CheckoutContainer, CheckoutHeader, Total } from './checkout.styles'

const Checkout = () => {
    const { cartItems, cartTotal } = useContext(CartContext)

    return (
        <CheckoutContainer>
            <CheckoutHeader>
                <div>
                    <span>PRODUCT</span>
                </div>
                <div>
                    <span>DESCRIPTION</span>
                </div>
                <div>
                    <span>QUANTITY</span>
                </div>
                <div>
                    <span>PRICE</span>
                </div>
                <div>
                    <span>REMOVE</span>
                </div>
            </CheckoutHeader>
            {cartItems.map((cartItem) => (
                <CheckoutItem key={cartItem.id} cartItem={cartItem} />
            ))}
            <Total>TOTAL: ${cartTotal}</Total>
        </CheckoutContainer>
    )
}

export default Checkout
