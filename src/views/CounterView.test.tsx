import { render, screen } from '@testing-library/react'
import React from 'react'
import CounterView from './CounterView'

describe('<CounterView />', () => {
    const onClick = jest.fn()
    const count = 0

    const defaultProps = {
        onClick,
        count
    }

    let props = {...defaultProps}

    beforeEach(() => {
        props = {...defaultProps}
    })

    it('should render', () => {
        render(<CounterView {...props} />)
    })

    describe('Styling', () => {
        test('Button should have initial scale', () => {
            //Arrange
            const buttonWrapperTestId = 'button-wrapper'
    
            //Act
            render(<CounterView {...props} />)
    
            const wrapperElement = screen.getByTestId(buttonWrapperTestId)

            //Assert
            expect(wrapperElement).toBeVisible()
            expect(wrapperElement).toHaveStyle('transform: scale(1)')
        })

        test('Button should have scale 1.3', () => {
            //Arrange
            props.count = 3
            const buttonWrapperTestId = 'button-wrapper'
    
            //Act
            render(<CounterView {...props} />)
    
            const wrapperElement = screen.getByTestId(buttonWrapperTestId)

            //Assert
            expect(wrapperElement).toBeVisible()
            expect(wrapperElement).toHaveStyle('transform: scale(1.3)')
        })
    })
})