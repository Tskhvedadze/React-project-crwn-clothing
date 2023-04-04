import styled from 'styled-components'

export const CategoryContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    justify-content: center
    column-gap: 20px;
    row-gap: 50px;

    @media screen and (max-width: 900px) {
        
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        justify-items: center;

    }

    @media screen and (max-width: 800px) {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        justify-items: center;
    }

    @media screen and (max-width: 600px) {
        
        display: grid;
        grid-template-columns: 1fr;
        justify-items: center;
    }
`

export const CategoryTitle = styled.h2`
    text-align: center;
    font-size: 38px;
    margin-bottom: 25px;
`
