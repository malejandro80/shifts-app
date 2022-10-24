/** @format */

import { Iresponse } from '../interfaces/Iresponse'
import { get } from './httpRequest.service'

export const getNurses = async (): Promise<Iresponse> => {
  return await get('nurse')
}
