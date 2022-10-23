/** @format */

import { render, screen } from '@testing-library/react'
import ShiftsTable from '../../components/ShiftsTable'

beforeEach(() => {
  render(<ShiftsTable />)
})

test('there is a title in the component', () => {
  const title = screen.getByText(/table/i)
  expect(title).toBeInTheDocument()
})
