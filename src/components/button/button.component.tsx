import React from 'react'
import { FC, ButtonHTMLAttributes } from 'react'

import {
    BaseButton,
    GoogleSignInButton,
    InvertedButton,
    ButtonSpinner,
} from './button.styles'

export enum BUTTON_TYPE_CLASSES {
    base = 'base',
    google = 'google',
    inverted = 'inverted',
}

const getButton = (buttonTypes = BUTTON_TYPE_CLASSES.base): typeof BaseButton =>
    ({
        [BUTTON_TYPE_CLASSES.base]: BaseButton,
        [BUTTON_TYPE_CLASSES.google]: GoogleSignInButton,
        [BUTTON_TYPE_CLASSES.inverted]: InvertedButton,
    }[buttonTypes])

export type ButtonProps = {
    buttonTypes?: BUTTON_TYPE_CLASSES
    isLoading?: boolean
} & ButtonHTMLAttributes<HTMLButtonElement>

const Button: FC<ButtonProps> = ({
    children,
    buttonTypes,
    isLoading,
    ...otherProps
}) => {
    const CustomButton = getButton(buttonTypes)
    return (
        <CustomButton disabled={isLoading} {...otherProps}>
            {isLoading ? <ButtonSpinner /> : children}
        </CustomButton>
    )
}

export default Button
