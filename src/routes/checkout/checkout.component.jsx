import { useSelector } from 'react-redux'

import {
    selectCartItems,
    selectCartTotal,
} from '../../store/cart/cart.selector.ts'

import CheckoutItem from '../../components/checkout-item/checkout-item.component'

import PaymentForm from '../../components/payment-form/payment-form.component'

import { CheckoutContainer, CheckoutHeader, Total } from './checkout.styles'

const Checkout = () => {
    const cartItems = useSelector(selectCartItems)
    const cartTotal = useSelector(selectCartTotal)

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
            <PaymentForm />
        </CheckoutContainer>
    )
}

export default Checkout
