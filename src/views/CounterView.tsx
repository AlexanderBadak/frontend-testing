import Button from 'components/Button'
import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    position: relative;
    height: 100px;
    width: 100%;
    background: ${p => p.theme.darkShadeBlue};

    &:after {
        
    }
`
const ButtonWrapper = styled.div<{clickCount: number}>`
    position: absolute;
    top: 50%;
    left: 50%;
    right: 50%;
    bottom: 50%;
    transform: scale(${p => p.clickCount * .1 + 1});
`

type TProps = {
    onClick: () => void
    clicks: number
}

const CounterView = (props: TProps) => {
    const { clicks, onClick } = props

    return (
        <Container>
            <ButtonWrapper clickCount={clicks} data-testid='button-wrapper'>
                <Button text={`Increment (${clicks})`} onClick={onClick} />
            </ButtonWrapper>
        </Container>
    )
}

export default CounterView