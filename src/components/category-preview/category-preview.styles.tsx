import styled from 'styled-components'

export const CategoryPreviewContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 30px;
`
export const Title = styled.h2`
    font-size: 28px;
    margin-bottom: 25px;

    span {
        cursor: pointer;
    }

    @media screen and (max-width: 800px) {
        font-size: 22px;
        margin: 15px auto 15px auto;
    }
`

export const Preview = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    column-gap: 20px;

    @media screen and (max-width: 800px) {
        grid-template-columns: repeat(2, 1fr);
        row-gap: 35px;
    }
`
