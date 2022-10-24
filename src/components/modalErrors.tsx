/** @format */

import React from 'react'
import { Alert } from '@mui/material'

export const ModalErrors = ({ errors }) => {
  if (errors.length > 0) {
    return (
      <>
        {errors.map(e => (
          <Alert severity='warning' style={{ marginTop: '1rem' }}>
            {e}
          </Alert>
        ))}
      </>
    )
  }

  return null
}
