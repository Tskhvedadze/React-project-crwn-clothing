import React from 'react'
import { Outlet } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'

import CartIcon from '../../components/cart-icon/cart-icon.component.tsx'
import CartDropdown from '../../components/cart-dropdown/cart-dropdown.component.jsx'

import { selectIsCartOpen } from '../../store/cart/cart.selector.ts'
import { selectCurrentUser } from '../../store/user/user.selector.ts'
import { signOutStart } from '../../store/user/user.action.ts'

import { ReactComponent as CrwnLogo } from '../../assets/crown.svg'

import {
    NavigationContainer,
    LogoContainer,
    NavLinks,
    NavLink,
} from './navigation.styles'

const Navigation = () => {
    const dispatch = useDispatch()
    const currentUser = useSelector(selectCurrentUser)
    const isCartOpen = useSelector(selectIsCartOpen)

    const signOutUser = () => dispatch(signOutStart())

    return (
        <>
            <NavigationContainer>
                <LogoContainer to='/'>
                    <CrwnLogo className='logo' />
                </LogoContainer>
                <NavLinks>
                    <NavLink to='/shop'>SHOP</NavLink>
                    {currentUser ? (
                        <NavLink as='span' onClick={signOutUser}>
                            SIGN OUT
                        </NavLink>
                    ) : (
                        <NavLink to='/auth'>SIGN IN</NavLink>
                    )}
                    <CartIcon />
                </NavLinks>
                {isCartOpen && <CartDropdown />}
            </NavigationContainer>
            <div>
                <Outlet />
            </div>
        </>
    )
}

export default Navigation
