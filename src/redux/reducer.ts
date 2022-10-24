/** @format */

import { combineReducers } from 'redux'
import { types } from './actions'

const initialState = { lastUpdate: new Date().getTime(), shifts: [] }

const shiftsReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case types.SET_SHIFTS:
      return { ...state, shifts: payload }
    case types.UPDATE_SHIFTS:
      console.log(payload, 'payload')
      const updateShifts = state.shifts.map(s =>
        s.id === payload.id ? payload : s
      )
      return {
        ...state,
        shifts: [...updateShifts],
        lastUpdate: new Date().getTime()
      }
    default:
      return state
  }
}

const nursesReducer = (state = { nurses: [] }, { type, payload }) => {
  switch (type) {
    case types.SET_NURSES:
      return { ...state, nurses: payload }
    default:
      return state
  }
}

// COMBINED REDUCERS
const reducers = {
  shifts: shiftsReducer,
  nurses: nursesReducer
}

export default combineReducers(reducers)
