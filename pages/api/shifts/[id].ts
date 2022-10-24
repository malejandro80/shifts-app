/** @format */

import nc from 'next-connect'
import cors from 'cors'
import { getShifts, updateShift } from '../../../backend/shifts/shifts.service'

const handler = nc()
  // use connect based middleware
  .use(cors())
  .put(async (req, res) => {
    const {
      query: { id },
      body
    } = req
    const updatedShift = updateShift(id, body)
    res.send({ data: updatedShift })
  })

export default handler
