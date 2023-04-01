import { CART_ACTION_TYPES } from './cart.types'
import { createAction } from '../../utils/reducer/reducer.utils.ts'

export const setIsCartOpen = (boolean) =>
    createAction(CART_ACTION_TYPES.SET_IS_CART_OPEN, boolean)

const existingCartItem = (cartItems, product) =>
    cartItems.find((cartItem) => cartItem.id === product.id)

const addCartItem = (cartItems, productToAdd) => {
    if (existingCartItem(cartItems, productToAdd)) {
        return cartItems.map((cartItem) =>
            cartItem.id === productToAdd.id
                ? { ...cartItem, quantity: cartItem.quantity + 1 }
                : cartItem,
        )
    }

    return [...cartItems, { ...productToAdd, quantity: 1 }]
}

const removeCartItem = (cartItems, cartItemToremove) => {
    if (existingCartItem(cartItems, cartItemToremove).quantity === 1) {
        return cartItems.filter(
            (cartItem) => cartItem.id !== cartItemToremove.id,
        )
    }

    return cartItems.map((cartItem) =>
        cartItem.id === cartItemToremove.id
            ? { ...cartItem, quantity: cartItem.quantity - 1 }
            : cartItem,
    )
}

const clearCartItem = (cartItems, cartToClear) =>
    cartItems.filter((cartItem) => cartItem.id !== cartToClear.id)

export const addItemToCart = (cartItems, productToAdd) => {
    const newCartItems = addCartItem(cartItems, productToAdd)
    return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems)
}

export const removeItemFromCart = (cartItems, cartItemToremove) => {
    const newCartItems = removeCartItem(cartItems, cartItemToremove)
    return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems)
}

export const clearItemFromCart = (cartItems, cartToClear) => {
    const newCartItems = clearCartItem(cartItems, cartToClear)
    return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems)
}
