/** @format */

import React from 'react'
import { useSelector } from 'react-redux'

export const useValidate = (selectedNurse, selectedShift, lockSubmit) => {
  const [errors, setErrors] = React.useState([])
  const shifts = useSelector(store => store.shifts.shifts)
  const nurses = useSelector(store => store.nurses.nurses)

  React.useEffect(() => {
    setErrors([])
    validate()
  }, [selectedShift, selectedNurse])

  const isValidNurse = () => {
    const shiftQualification = shifts.find(
      s => s.id === selectedShift
    ).qualification
    const nurseQualification = shifts.find(
      s => s.id === selectedNurse
    ).qualification

    if (shiftQualification > nurseQualification) {
      return false
    }
    return true
  }

  const validate = async () => {
    if (selectedShift === null || selectedNurse === null) return
    const validNurse = isValidNurse()
    if (!validNurse) {
      const err = [...new Set([...errors, 'nurse Invalid'])]
      setErrors(err)
      lockSubmit(true)
    }
  }

  return { errors, validate, setErrors }
}
