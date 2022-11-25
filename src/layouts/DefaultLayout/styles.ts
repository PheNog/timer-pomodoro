import styled from 'styled-components'

export const LayoutContainer =  styled.div`
    max-width: 74rem;
// height feito com calculo, 100vh(o tamanho inteiro do viewport height) - 10 rem, onde 5 rem será a margin top e 5 a margin bot
    height: calc(100vh - 10rem);
    margin: 5rem auto;

    padding: 2.5rem;
    background: ${props =>props.theme['gray-800']};
    border-radius: 8px;

    display: flex;
    flex-direction: column;
`