/** @format */

import { createContext, useState } from 'react'

export const AppDataContext = createContext()

export const AppDataProvider = ({ nurses, shifts, children }) => {
  const [globalState, setGlobalState] = useState({ nurses, shifts })
  return (
    <AppDataContext.Provider value={{ ...globalState, setGlobalState }}>
      {children}
    </AppDataContext.Provider>
  )
}
