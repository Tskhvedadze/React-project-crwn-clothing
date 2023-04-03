import styled from 'styled-components'

export const SignUpContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 380px;

    h2 {
        margin: 10px 0;
    }

    @media screen and (max-width: 900px) {
        width: 48rem;
    }
    @media screen and (max-width: 780px) {
        width: 45rem;
    }
    @media screen and (max-width: 730px) {
        width: 43rem;
    }
    @media screen and (max-width: 692px) {
        width: 80%;
    }
`
