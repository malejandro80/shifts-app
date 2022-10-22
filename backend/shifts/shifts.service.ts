/** @format */

import { Ishift } from './Ishift'
const fs = require('fs')
let shifts = require('../data/shifts.json')

export const getShifts = (): Ishift[] => {
  return shifts
}

export const updateShift = (id, params) => {
  const shifts = nurses.find(x => x.id.toString() === id.toString())

  // set date updated
  shifts.dateUpdated = new Date().toISOString()

  // update and save
  Object.assign(shifts, params)
  saveData()
}

// private helper functions

function saveData() {
  fs.writeFileSync('../data/shifts.json', JSON.stringify(shifts, null, 4))
}
