import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import React from 'react'
import Button from './Button'

describe('<Button />', () => {
    const onClick = jest.fn()
    const text = 'Increment (0)'

    const defaultProps = {
        onClick,
        text
    }

    let props = {...defaultProps}

    beforeEach(() => {
        props = {...defaultProps}
    })

    it('should render and call onClick', () => {
        //Act
        render(<Button {...props} />)

        const buttonElement = screen.getByText(props.text)

        userEvent.click(buttonElement)

        //Assert
        expect(buttonElement).toBeVisible()
        expect(props.onClick).toHaveBeenCalledTimes(1)
    })

    it('should call onClick 5 times', () => {
        //Act
        render(<Button {...props} />)

        const buttonElement = screen.getByText(props.text)

        for (let i = 0; i < 5; i++) {
            userEvent.click(buttonElement)
        }

        //Assert
        expect(buttonElement).toBeVisible()
        expect(props.onClick).toHaveBeenCalledTimes(5)
    })
})