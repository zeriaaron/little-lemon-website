import { render, screen, fireEvent } from "@testing-library/react";
import BookingForm from '../components/BookingForm'
import { MemoryRouter } from "react-router-dom";
import { test, expect, vi } from 'vitest'

const dispatchMock = vi.fn()
const submitFormMock = vi.fn()

test('Renders the BookingForm heading', {}, () => {

    render(
        <MemoryRouter>
            <BookingForm state={{ availableTimes: [], bookingInfo: [], submitted: false }}
            dispatch={dispatchMock}
            submitForm={submitFormMock}/>
        </MemoryRouter>
    )

    const headerText = screen.getByText('Reserve a Table')

    expect(headerText).toBeInTheDocument()
})

test('dispatch is called when date changes', () => {
    render(
        <MemoryRouter>
            <BookingForm state={{ availableTimes: [], bookingInfo: [], submitted: false }}
            dispatch={dispatchMock}
            submitForm={submitFormMock} />
        </MemoryRouter>
    )

    const dateInput = screen.getByLabelText(/choose date/i)
    fireEvent.change(dateInput, { target: { value: '2025-08-11'} })

    expect(dispatchMock).toHaveBeenCalledWith({ type: 'update', date: '2025-08-11' })
})