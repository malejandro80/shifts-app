/** @format */

import nc from 'next-connect'
import cors from 'cors'
import { getShifts, updateShift } from '../../backend/shifts/shifts.service'

const handler = nc()
  // use connect based middleware
  .use(cors())
  // express like routing for methods
  .get((req, res) => {
    const shifts = getShifts()
    res.send({ data: shifts })
  })
  .put(async (req, res) => {
    const updatedShift = updateShift(3, { nurseId: 2 })
    res.send({ data: updatedShift })
  })

export default handler
