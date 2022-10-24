/** @format */

export const types = {
  SET_SHIFTS: 'SET_SHIFTS',
  UPDATE_SHIFTS: 'UPDATE_SHIFTS',
  SET_NURSES: 'SET_NURSES'
}

export const setShifts = shifts => ({ type: types.SET_SHIFTS, payload: shifts })
export const updateShifts = shifts => ({
  type: types.UPDATE_SHIFTS,
  payload: shifts
})
export const setNurses = nurses => ({ type: types.SET_NURSES, payload: nurses })
