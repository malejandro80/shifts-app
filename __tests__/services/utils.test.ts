/** @format */

import { matchShiftWithNurses } from '../../src/services/utils.service'

const nurses = [
  {
    id: 1,
    name: 'Mary',
    lastName: 'Jane',
    userName: 'mjane',
    qualification: 'CNA'
  }
]
const shifts = [
  {
    id: 1,
    initDate: 1666471987318,
    endDate: 1666472022817,
    nurseId: 1,
    qualification: 'CNA'
  }
]
let matchedShifts = null
beforeEach(() => {
  matchedShifts = matchShiftWithNurses(shifts, nurses)
})

test('matchShiftWithNurses should return and array', async () => {
  expect(Array.isArray(matchedShifts)).toBe(true)
})

test('should match each shift with the correct nurses', async () => {
  expect(matchedShifts[0].nurse).toMatchObject(nurses[0])
})
