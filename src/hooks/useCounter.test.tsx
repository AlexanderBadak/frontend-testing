import React from 'react'
import { act, renderHook } from '@testing-library/react-hooks'
import useCounter from './useCounter'

describe('useCounter', () => {
    it('should initialize the startCount', () => {
        //Arrange
        const startCount = 0

        //Act
        const { result } = renderHook(() => useCounter({startCount}))

        //Assert
        expect(result.current.count).toBe(startCount)
    })

    it('should increment by 3', () => {
        //Arrange
        const startCount = 4
        const increment = 7

        //Act
        const { result } = renderHook(() => useCounter({startCount}))

        act(() => {
            result.current.increaseCount(increment)
        })

        //Assert
        expect(result.current.count).toBe(startCount + increment)
    })
})