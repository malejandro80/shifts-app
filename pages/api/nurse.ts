/** @format */

import nc from 'next-connect'
import cors from 'cors'
import { getNurses } from '../../backend/nurses/nurse.service'

const handler = nc()
  // use connect based middleware
  .use(cors())
  // express like routing for methods
  .get((req, res) => {
    const nurses = getNurses()
    res.send(nurses)
  })

export default handler
