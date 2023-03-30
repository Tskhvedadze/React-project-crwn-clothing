import {
    BaseButton,
    GoogleSignInButton,
    InvertedButton,
    ButtonSpinner,
} from './button.styles'

export const BUTTON_TYPE_CLASSES = {
    base: 'base',
    google: 'google',
    inverted: 'inverted',
}

const getButton = (buttonTypes = BUTTON_TYPE_CLASSES.base) =>
    ({
        [BUTTON_TYPE_CLASSES.base]: BaseButton,
        [BUTTON_TYPE_CLASSES.google]: GoogleSignInButton,
        [BUTTON_TYPE_CLASSES.inverted]: InvertedButton,
    }[buttonTypes])

const Button = ({ children, buttonTypes, isLoading, ...otherProps }) => {
    const CustomButton = getButton(buttonTypes)
    return (
        <CustomButton disabled={isLoading} {...otherProps}>
            {isLoading ? <ButtonSpinner /> : children}
        </CustomButton>
    )
}

export default Button
