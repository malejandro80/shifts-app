/** @format */

import { getNurses } from '../../src/services/nurses.service'

jest.mock('../../services/nurses.service.ts')
let shifts: Promise | null = null
const nurse = {
  id: 1,
  name: 'Mary',
  lastName: 'Jane',
  userName: 'mjane',
  qualification: 'CNA'
}

beforeEach(async () => {
  getNurses.mockReturnValueOnce({
    data: [nurse]
  })
  shifts = await getNurses()
})

test('response should be an object', async () => {
  expect(shifts && typeof shifts === 'object').toBe(true)
})

test('response data should be an array', async () => {
  const dataResp = shifts.data
  expect(Array.isArray(dataResp)).toBe(true)
})

test('should match expected response', async () => {
  expect(shifts.data[0]).toMatchObject(nurse)
})
