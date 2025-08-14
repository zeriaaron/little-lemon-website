import { configureStore, createSlice } from '@reduxjs/toolkit'

const bookingSlice = createSlice({
    name: 'booking',
    initialState: { bookingInfo: [] },
    reducers: {
        addBooking: (state, action) => {
            state.bookingInfo.push(action.payload)
        },
        resetBookings: (state) => {state.bookingInfo = []}
    }
})

export const { addBooking, resetBookings } = bookingSlice.actions

export const store = configureStore({
    reducer: {
        booking: bookingSlice.reducer
    }
})