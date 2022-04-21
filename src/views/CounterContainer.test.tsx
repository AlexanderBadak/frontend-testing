import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import React from 'react'
import RandomNumberService from 'services/randomNumberService'
import CounterContainer from './CounterContainer'

describe('<CounterContainer />', () => {
    const increment = 3

    it('should render', () => {
        //Arrange
        const buttonText = 'Increment (0)'

        //Act
        render(<CounterContainer />)

        const buttonElement = screen.getByText(buttonText)

        //Assert
        expect(buttonElement).toBeVisible()
    })

    it('should increment', async () => {
        //Arrange
        RandomNumberService.generateRandomNumber = jest.fn().mockReturnValue(increment)
        const initialButtonText = 'Increment (0)'
        const incrementedText = `Increment (${increment})`

        //Act
        render(<CounterContainer />)

        const buttonElement = screen.getByText(initialButtonText)
        userEvent.click(buttonElement)

        //Assert
        expect.assertions(2)

        await waitFor(() => {
            const incrementedElement = screen.getByText(incrementedText)
            expect(incrementedElement).toBeVisible()
        })

        expect(RandomNumberService.generateRandomNumber).toHaveBeenCalledTimes(1)
    })
})