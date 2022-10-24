/** @format */
export const matchShiftWithNurses = (shifts, nurses) => {
  return shifts.map(s => {
    let nurse = null
    if (s.nurseId !== null) {
      nurse = nurses.find(n => n.id === s.id)
    }
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
