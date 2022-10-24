/** @format */

import { Iresponse } from '../interfaces/Iresponse'
import { get } from './httpRequest.service'

export const getShifts = async (): Promise<Iresponse> => {
  return await get('shifts')
}
