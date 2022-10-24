/** @format */

import React, { useState, useEffect } from 'react'
import { updateShift as updateShiftReq } from '../services/shifts.service'
import { useSelector, useDispatch } from 'react-redux'
import { updateShifts } from '../redux/actions'
import { useValidate } from './useValidate'

export const useHandleShift = handleModal => {
  const dispatch = useDispatch()
  const shifts = useSelector(store => store.shifts.shifts)
  const nurses = useSelector(store => store.nurses.nurses)
  const [lockSaveButton, setLockSaveButton] = useState(true)
  const [selectedShift, setSelectedShift] = useState(null)
  const [selectedNurse, setSelectedNurse] = useState(null)

  const { errors } = useValidate(
    selectedNurse,
    selectedShift,
    setLockSaveButton
  )

  const onChangeValue = e => {
    const { name, value } = e.target
    if (name === 'shift') {
      setSelectedShift(value)
      setLockSaveButton(false)
    } else {
      setSelectedNurse(value)
    }
  }

  const updateShift = async () => {
    const updatedShift = await updateShiftReq(selectedShift, {
      nurseId: selectedNurse
    })

    dispatch(updateShifts(updatedShift))

    handleModal(false)
  }
  return { onChangeValue, shifts, nurses, lockSaveButton, updateShift, errors }
}
