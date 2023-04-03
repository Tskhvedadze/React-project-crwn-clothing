import styled from 'styled-components'

import Button from '../button/button.component'

export const PaymentFormContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-bottom: 35px;
`

export const FormContainer = styled.form`
    min-width: 90%;
`

export const PaymentButton = styled(Button)`
    margin-left: auto;
    margin-top: 30px;
`
