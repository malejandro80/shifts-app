/** @format */

import * as React from 'react'
import Box from '@mui/material/Box'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select, { SelectChangeEvent } from '@mui/material/Select'
import { mapModalData } from '../services/utils.service'

export default function Dropdown({ onChange, name, data }) {
  const mappedData = mapModalData(name, data)
  return (
    <Box sx={{ minWidth: 120, margin: '1rem' }}>
      <FormControl fullWidth>
        <InputLabel id='demo-simple-select-label'>{name}</InputLabel>
        <Select
          labelId='demo-simple-select-label'
          id='demo-simple-select'
          label={name}
          onChange={onChange}
          name={name}
        >
          {mappedData.map(data => (
            <MenuItem key={data.value} value={data.value}>
              {data.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  )
}
