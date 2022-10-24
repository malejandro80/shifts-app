/** @format */

import { Iresponse } from '../interfaces/Iresponse'
import { get, put } from './httpRequest.service'

export const getShifts = async (): Promise<Iresponse> => {
  return await get('shifts')
}

export const updateShift = async (id, body) => {
  return (await put(`shifts/${id}`, body)).data
}
