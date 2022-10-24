/** @format */

import { createContext } from 'react'

export const AppDataContext = createContext()

export const AppDataProvider = ({ nurses, shifts, children }) => {
  return (
    <AppDataContext.Provider value={{ nurses, shifts }}>
      {children}
    </AppDataContext.Provider>
  )
}
