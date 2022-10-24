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
        name: `${shift.name}; ${new Date(shift.initDate).getDate()} ${new Date(
          shift.endDate
        ).getDate()} ${shift.qualification} `,
        value: shift.id
      }
    })
  } else {
    return data.map(nurse => {
      return {
        name: `${nurse.name} ${nurse.lastName} (${nurse.qualification})`,
        value: nurse.id
      }
    })
  }
}
