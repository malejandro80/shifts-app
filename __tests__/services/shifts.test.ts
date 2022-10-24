/** @format */

import { getShifts } from '../../src/services/shifts.service'

jest.mock('../../src/services/shifts.service.ts')
let shifts: Promise | null = null

beforeEach(async () => {
  getShifts.mockReturnValueOnce({ data: [{ qualification: 'CNA' }] })
  shifts = await getShifts()
})

test('response should be an object', async () => {
  expect(shifts && typeof shifts === 'object').toBe(true)
})

test('response data should be an array', async () => {
  const dataResp = shifts.data
  expect(Array.isArray(dataResp)).toBe(true)
})

test('should return shifts data', async () => {
  expect(shifts.data[0].qualification).toBe('CNA')
})
