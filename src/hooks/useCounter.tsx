import React, { useState } from 'react'

type TUseCounterProps = {
    startCount: number
}

type TUseCounter = {
    count: number
    increaseCount: (amount: number) => void
}

const useCounter = (props: TUseCounterProps) : TUseCounter => {
    const { startCount } = props

    const [count, setCount] = useState<number>(startCount)

    const increaseCount = (amount: number) => {
        setCount(prev => prev + amount)
    }

    return {
        count,
        increaseCount
    }
}

export default useCounter