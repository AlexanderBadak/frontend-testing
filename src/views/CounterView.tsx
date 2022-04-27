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
const ButtonWrapper = styled.div<{count: number}>`
    position: absolute;
    top: 50%;
    left: 50%;
    right: 50%;
    bottom: 50%;
    transform: scale(${p => p.count * .1 + 1});
`

type TProps = {
    onClick: () => void
    count: number
}

const CounterView = (props: TProps) => {
    const { count, onClick } = props

    return (
        <Container>
            <ButtonWrapper count={count} data-testid='button-wrapper'>
                <Button text={`Increment (${count})`} onClick={onClick} />
            </ButtonWrapper>
        </Container>
    )
}

export default CounterView