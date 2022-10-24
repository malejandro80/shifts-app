/** @format */

import { Ishift } from './Ishift'
const fs = require('fs')
let shifts = require('../data/shifts.json')
const path = require('path')

export const getShifts = (): Ishift[] => {
  return shifts
}

export const updateShift = (id, params): Ishift => {
  const updatedShift = shifts.find(
    shift => shift.id.toString() === id.toString()
  )
  Object.assign(updatedShift, params)
  shifts = shifts.map(s =>
    s.id.toString() === id.toString() ? updatedShift : s
  )
  saveData()
  return updatedShift
}

// private helper functions

function saveData() {
  const jsonDirectory = path.join(process.cwd(), 'backend')

  fs.writeFileSync(
    jsonDirectory + '/data/shifts.json',
    JSON.stringify(shifts, null, 4)
  )
}
