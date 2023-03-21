import { createContext, useState, useEffect } from 'react'

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

export const CartContext = createContext({
    isCartOpen: false,
    setIsCartOpen: () => {},
    cartItems: [],
    addItemToCart: () => {},
    removeItemFromCart: () => {},
    clearItemFromCart: () => {},
    cartCount: 0,
    cartTotal: 0,
})

export const CartProvider = ({ children }) => {
    const [isCartOpen, setIsCartOpen] = useState(false)
    const [cartItems, setCartItems] = useState([])
    const [cartCount, setCartCount] = useState(0)
    const [cartTotal, setCartTotal] = useState(0)

    useEffect(() => {
        const newCartCount = cartItems.reduce(
            (total, cartItem) => total + cartItem.quantity,
            0,
        )
        setCartCount(newCartCount)
    }, [cartItems])

    useEffect(() => {
        const newCartTotal = cartItems.reduce(
            (total, cartItem) => total + cartItem.quantity * cartItem.price,
            0,
        )
        setCartTotal(newCartTotal)
    }, [cartItems])

    const addItemToCart = (productToAdd) => {
        setCartItems(addCartItem(cartItems, productToAdd))
    }

    const removeItemFromCart = (cartItemToremove) => {
        setCartItems(removeCartItem(cartItems, cartItemToremove))
    }

    const clearItemFromCart = (cartToClear) => {
        setCartItems(clearCartItem(cartItems, cartToClear))
    }

    const value = {
        isCartOpen,
        setIsCartOpen,
        addItemToCart,
        removeItemFromCart,
        clearItemFromCart,
        cartItems,
        cartCount,
        cartTotal,
    }

    return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}
