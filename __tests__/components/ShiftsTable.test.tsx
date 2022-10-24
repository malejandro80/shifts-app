/** @format */

import { render, screen } from '@testing-library/react'
import ShiftsTable from '../../src/components/ShiftsTable'

import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'

beforeEach(() => {
  const initialState = { shifts: { shifts: [] }, nurses: { nurses: [] } }
  const mockStore = configureStore()
  let store = mockStore(initialState)

  render(
    <Provider store={store}>
      <ShiftsTable />
    </Provider>
  )
})

test('there is a title in the component', () => {
  const title = screen.getByText(/table/i)
  expect(title).toBeInTheDocument()
})
