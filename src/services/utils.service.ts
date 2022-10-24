/** @format */

import moment from 'moment'

/** @format */
export const matchShiftWithNurses = (shifts, nurses) => {
  return shifts.map(s => {
    if (s.nurseId === null) {
      return s
    }
    let nurse = nurses.find(n => n.id === s.nurseId)

    return { ...s, nurse }
  })
}

export const mapModalData = (type, data) => {
  if (type === 'shift') {
    return data.map(shift => {
      return {
        name: `${shift.name}; ${moment(shift.initDate).format(
          'h:mm:ss a'
        )} ${moment(shift.endDate).format(
          'h:mm:ss a'
        )}  (${transformQualification(shift.qualification)})`,
        value: shift.id
      }
    })
  } else {
    return data.map(nurse => {
      return {
        name: `${nurse.name} ${nurse.lastName} (${transformQualification(
          nurse.qualification
        )})`,
        value: nurse.id
      }
    })
  }
}

export const transformQualification = key => {
  const qualification = { 1: 'CNA', 2: 'LPN', 3: 'RN' }
  return qualification[key]
}
//cna = 0,LPN =1 rn=2
