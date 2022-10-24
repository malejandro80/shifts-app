/** @format */

import React, { useState, useContext } from 'react'
import { AppDataContext } from '../context/AppDataProvider'
import { updateShift as updateShiftReq } from '../services/shifts.service'
import { useSelector, useDispatch } from 'react-redux'
import { updateShifts } from '../redux/actions'

export const useHandleShift = handleModal => {
  const dispatch = useDispatch()
  const shifts = useSelector(store => store.shifts.shifts)
  const nurses = useSelector(store => store.nurses.nurses)
  const [lockSaveButton, setLockSaveButton] = useState(true)
  const [selectedShift, setSelectedShift] = useState(null)
  const [selectedNurse, setSelectedNurse] = useState(null)
  const [errors, setErrors] = useState([])

  const onChangeValue = e => {
    const { name, value } = e.target
    if (name === 'shift') {
      setSelectedShift(value)
      setLockSaveButton(false)
    } else {
      setSelectedNurse(value)
    }
  }

  const ValidateRange = () => {
    if (!selectedShift || !selectedNurse) return

    const shiftQualification = shifts.find(
      s => s.id === selectedShift
    ).qualification
    const nurseQualification = shifts.find(
      s => s.id === selectedNurse
    ).qualification
    console.log(shiftQualification, nurseQualification)
    if (shiftQualification < nurseQualification) {
      alert('not valid')
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
