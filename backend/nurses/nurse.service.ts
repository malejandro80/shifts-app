/** @format */

import { Inurse } from './Inurse'
/** @format */

let nurses = require('../data/nurses.json')

export const getNurses = (): Inurse[] => {
  return nurses
}
