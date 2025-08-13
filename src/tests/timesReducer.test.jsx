import { initializeTimes, updateTimes } from "../components/timesReducer";
import { test, expect } from "vitest";
import { fetchAPI } from "../../api";


test('initializeTimes returns correct initial times', () => {
    // expect(initializeTimes()).toEqual(expect.any(Object))
    const today = new Date().toISOString().split('T')[0]
    const todayObject = new Date(today)
    const initialTimes = fetchAPI(todayObject)

    expect(initializeTimes()).toEqual({ availableTimes: initialTimes, bookingInfo: [], submitted: false })
})

test('updateTimes returns same state for now', () => {
    const array = ["17:00",
    "17:30",
    "18:30",
    "19:00",
    "20:30",
    "21:00",
    "22:00",
    "23:30",]
    const state = { availableTimes: array, bookingInfo: [{date: '2025-08-13', time: '17:30', guests: '5', occasion: 'birthday'}], submitted: true, date: '2025-08-13' }
    const action = { type: 'update', date: '2025-08-11' }

    const newState = updateTimes(state, action)
    expect(newState).toEqual(state)
})