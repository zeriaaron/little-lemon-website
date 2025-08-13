import { fetchAPI } from '../../api'

export function initializeTimes() {
  // return ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];
  // Return the available times for today's date
  const today = new Date().toISOString().split('T')[0]
  const todayObject = new Date(today)

  const initialTimes = fetchAPI(todayObject)

  return { availableTimes: initialTimes, bookingInfo: [], submitted: false }
}

export function updateTimes(state, action) {
  const dateObject = new Date(action.date)
  const newAvailableTimes = fetchAPI(dateObject)

  switch (action.type) {
    case 'submit':
      return {...state, bookingInfo: [...state.bookingInfo, action.payload], submitted: true}
    case 'update':
      return {...state, availableTimes: newAvailableTimes}
    default:
      return state
  }
}
