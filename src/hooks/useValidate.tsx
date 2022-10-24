/** @format */

import React from 'react'
import { useSelector } from 'react-redux'
import areIntervalsOverlapping from 'date-fns/areIntervalsOverlapping'

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

  const validRange = () => {
    const previousShifts = shifts.filter(s => s.nurseId === selectedNurse)

    if (previousShifts.length === 0) {
      return false
    }
    const shiftData = shifts.find(s => s.id === selectedShift)

    let isShiftOverlaped = false

    previousShifts.forEach(ps => {
      const overlap = areIntervalsOverlapping(
        { start: new Date(ps.initDate), end: new Date(ps.endDate) },
        {
          start: new Date(shiftData.initDate),
          end: new Date(shiftData.endDate)
        }
      )
      if (overlap) {
        isShiftOverlaped = true
      }
    })
    return isShiftOverlaped
  }

  const validate = async () => {
    let err = []
    if (selectedShift === null || selectedNurse === null) return

    if (validRange()) {
      err.push('range Invalid')
    }

    if (!isValidNurse()) {
      err.push('nurse Invalid')
    }
    if (err.length > 0) {
      setErrors([...new Set(err)])
      lockSubmit(true)
    }
  }

  return { errors, validate, setErrors }
}
