import styled from 'styled-components'

export const CheckoutItemContainer = styled.div`
    width: 100%;
    display: flex;
    border-bottom: 1px solid #a9a9a9;
    padding: 15px 0;
    font-size: 20px;
    align-items: center;
    justify-content: space-between;

    @media screen and (max-width: 900px) {
        font-size: 16px;
    }
    @media screen and (max-width: 630px) {
        font-size: 12px;
    }
    @media screen and (max-width: 450px) {
        font-size: 10px;
    }
`

export const ImageContainer = styled.div`
    width: 23%;
    padding-right: 15px;

    img {
        width: 100%;
        height: 100%;
    }
`

export const BaseSpan = styled.span`
    width: 23%;
`

export const Quantity = styled(BaseSpan)`
    display: flex;
`
export const Arrow = styled.div`
    cursor: pointer;
`
export const Value = styled.span`
    margin: 0 10px;
`
export const RemoveButton = styled.div`
    padding-left: 12px;
    cursor: pointer;
`
