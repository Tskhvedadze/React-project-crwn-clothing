import styled from 'styled-components'

export const CheckoutContainer = styled.div`
    width: 80%;
    min-height: 90vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 50px auto 0;

    @media screen and (max-width: 900px) {
        width: 100%;
        font-size: 13px;
    }
`

export const CheckoutHeader = styled.div`
    width: 100%;
    padding: 10px 0;
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid darkgrey;

    @media screen and (max-width: 900px) {
        padding: 0;
    }
`

export const Total = styled.div`
    margin-top: 15px;
    margin-left: auto;
    font-size: 36px;

    @media screen and (max-width: 800px) {
        font-size: 22px;
    }
`
