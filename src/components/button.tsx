import React from 'react'
import styled from 'styled-components'

type TProps = {
    onClick: () => void
    text: string
}

const Container = styled.button`
    border: solid .1rem red;
    font-size: 2em;
`
const Wrapper = styled.div`
    width: 15rem;
    &:hover ${Container} {
        background: purple;
    }
`

const Button = (props: TProps) => {
    const { text, onClick } = props

    return (
        <Wrapper>
            <Container onClick={onClick}>
                {text}
            </Container>
        </Wrapper>
    )
}

export default Button