import { CART_ACTION_TYPES, CartItem } from './cart.types.ts'
import {
    createAction,
    withMatcher,
    ActionWithPayload,
} from '../../utils/reducer/reducer.utils.ts'
import { CategoryItem } from '../categories/category.types.ts'

const addCartItem = (
    cartItems: CartItem[],
    productToAdd: CategoryItem,
): CartItem[] => {
    const existingCartItem = cartItems.find(
        (cartItem) => cartItem.id === productToAdd.id,
    )

    if (existingCartItem) {
        return cartItems.map((cartItem) =>
            cartItem.id === productToAdd.id
                ? { ...cartItem, quantity: cartItem.quantity + 1 }
                : cartItem,
        )
    }

    return [...cartItems, { ...productToAdd, quantity: 1 }]
}

const removeCartItem = (
    cartItems: CartItem[],
    cartItemToRemove: CategoryItem,
): CartItem[] => {
    // find the cart item to remove
    const existingCartItem = cartItems.find(
        (cartItem) => cartItem.id === cartItemToRemove.id,
    )

    // check if quantity is equal to 1, if it is remove that item from the cart
    if (existingCartItem && existingCartItem.quantity === 1) {
        return cartItems.filter(
            (cartItem) => cartItem.id !== cartItemToRemove.id,
        )
    }

    // return back cartitems with matching cart item with reduced quantity
    return cartItems.map((cartItem) =>
        cartItem.id === cartItemToRemove.id
            ? { ...cartItem, quantity: cartItem.quantity - 1 }
            : cartItem,
    )
}

const clearCartItem = (
    cartItems: CartItem[],
    cartToClear: CartItem,
): CartItem[] => cartItems.filter((cartItem) => cartItem.id !== cartToClear.id)

export type SetIsCartOpen = ActionWithPayload<
    CART_ACTION_TYPES.SET_IS_CART_OPEN,
    boolean
>

export type SetCartItems = ActionWithPayload<
    CART_ACTION_TYPES.SET_CART_ITEMS,
    CartItem[]
>

export const setIsCartOpen = withMatcher(
    (boolean: boolean): SetIsCartOpen =>
        createAction(CART_ACTION_TYPES.SET_IS_CART_OPEN, boolean),
)

export const setCartItems = withMatcher(
    (cartItems: CartItem[]): SetCartItems =>
        createAction(CART_ACTION_TYPES.SET_CART_ITEMS, cartItems),
)

export const addItemToCart = (
    cartItems: CartItem[],
    productToAdd: CategoryItem,
) => {
    const newCartItems = addCartItem(cartItems, productToAdd)
    return setCartItems(newCartItems)
}

export const removeItemFromCart = (
    cartItems: CartItem[],
    cartItemToremove: CartItem,
) => {
    const newCartItems = removeCartItem(cartItems, cartItemToremove)
    return setCartItems(newCartItems)
}

export const clearItemFromCart = (
    cartItems: CartItem[],
    cartToClear: CartItem,
) => {
    const newCartItems = clearCartItem(cartItems, cartToClear)
    return setCartItems(newCartItems)
}
