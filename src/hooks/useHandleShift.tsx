/** @format */

import React, { useState, useContext } from 'react'
import { AppDataContext } from '../context/AppDataProvider'

export const useHandleShift = () => {
  const { shifts, nurses } = useContext(AppDataContext)
  const [lockSaveButton, setLockSaveButton] = useState(true)
  const [selectedShift, setSelectedShift] = useState(null)
  const [selectedNurse, setSelectedNurse] = useState(null)
  const onChangeValue = e => {
    const { name, value } = e.target
    if (name === 'shift') {
      setSelectedShift(value)
      setLockSaveButton(false)
    } else {
      setSelectedNurse(value)
    }
  }
  const updateShift = () => {}
  return { onChangeValue, shifts, nurses, lockSaveButton, updateShift }
}
