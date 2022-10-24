/** @format */

import * as React from 'react'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import Modal from '@mui/material/Modal'
import styles from '../../styles/modal.module.css'
import Dropdown from './Dropdown'
import { useHandleShift } from '../hooks/useHandleShift'

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4
}

export default function ShiftModal() {
  const [open, setOpen] = React.useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)
  const { onChangeValue, shifts, nurses, lockSaveButton, updateShift } =
    useHandleShift(setOpen)
  return (
    <div>
      <Button onClick={handleOpen} className={`${styles.modalButton}`}>
        Set Shift Assignment
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'
      >
        <Box sx={style}>
          <Typography id='modal-modal-title' variant='h6' component='h2'>
            Set Shift Assignment
          </Typography>
          <div>
            <Dropdown onChange={onChangeValue} name={'shift'} data={shifts} />
            <Dropdown onChange={onChangeValue} name={'nurses'} data={nurses} />
            <button disabled={lockSaveButton} onClick={updateShift}>
              ghola
            </button>
          </div>
          {/* <Typography id='modal-modal-description' sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography> */}
        </Box>
      </Modal>
    </div>
  )
}
