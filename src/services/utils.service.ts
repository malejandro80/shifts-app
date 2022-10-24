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
