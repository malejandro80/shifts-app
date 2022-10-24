/** @format */

import * as React from 'react'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import { matchShiftWithNurses } from '../services/utils.service'
import ShiftModal from './ShiftModal'
import { useSelector } from 'react-redux'

export default function ShiftsTable() {
  const shifts = useSelector(store => store.shifts.shifts)
  const nurses = useSelector(store => store.nurses.nurses)
  const mathedShifts = matchShiftWithNurses(shifts, nurses)

  return (
    <>
      <div className='shift-table__header'>
        <h1>table</h1>
        <ShiftModal />
      </div>

      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label='simple table'>
          <TableHead>
            <TableRow>
              <TableCell>Shift</TableCell>
              <TableCell align='right'>Start Time</TableCell>
              <TableCell align='right'>End Time</TableCell>
              <TableCell align='right'>Certification Required</TableCell>
              <TableCell align='right'>Asigned Nurse</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {mathedShifts.map(s => (
              <TableRow
                key={s.id}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component='th' scope='row'>
                  {s.name}
                </TableCell>
                <TableCell align='right'>{s.initDate}</TableCell>
                <TableCell align='right'>{s.endDate}</TableCell>
                <TableCell align='right'>{s.qualification}</TableCell>
                <TableCell align='right'>
                  {s.nurse
                    ? `${s.nurse?.name} ${s.nurse?.lastName} (${s.nurse?.qualification})`
                    : ''}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  )
}
