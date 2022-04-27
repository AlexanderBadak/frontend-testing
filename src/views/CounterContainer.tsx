import useCounter from 'hooks/useCounter'
import React from 'react'
import RandomNumberService from 'services/randomNumberService'
import CounterView from './CounterView'

const CounterContainer = () => {
    const {count, increaseCount} = useCounter({startCount: 0})

    const onClick = async () => {
        const r = await RandomNumberService.generateRandomNumber()
        increaseCount(r)
    }

    return (
        <CounterView onClick={onClick} count={count} />
    )
}

export default CounterContainer