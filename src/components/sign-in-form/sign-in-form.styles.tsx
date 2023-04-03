import styled from 'styled-components'

export const SignInContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 380px;
    h2 {
        margin: 10px 0;
    }

    @media screen and (max-width: 900px) {
        margin-bottom: 20px;
        width: 48rem;
    }
    @media screen and (max-width: 780px) {
        margin-bottom: 20px;
        width: 45rem;
    }
    @media screen and (max-width: 730px) {
        margin-bottom: 20px;
        width: 43rem;
    }
    @media screen and (max-width: 692px) {
        margin-bottom: 20px;
        width: 80%;
    }
`
export const ButtonContainer = styled.div`
    display: flex;
    justify-content: space-between;
`
