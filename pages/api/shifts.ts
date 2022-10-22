/** @format */

import nc from 'next-connect'
import cors from 'cors'
import { getShifts } from '../../backend/shifts/shifts.service'

const handler = nc()
  // use connect based middleware
  .use(cors())
  // express like routing for methods
  .get((req, res) => {
    const shifts = getShifts()
    res.send(shifts)
  })
  .put(async (req, res) => {
    res.end('Hola Amigos')
  })

export default handler
