import { createContext, useState } from 'react'

interface DarkmModeContextType {
  darkMode: boolean
  setDarkMode: React.Dispatch<React.SetStateAction<boolean>>
}

const initialState: DarkmModeContextType = {
  darkMode: true,
  setDarkMode: () => {}
}

interface Props {
  children: React.ReactNode
}

export const DarkModeContext = createContext<DarkmModeContextType>(initialState)

export const DarkMode = ({ children }: Props): JSX.Element => {
  const [darkMode, setDarkMode] = useState(initialState.darkMode)

  return (
    <DarkModeContext.Provider value={{ darkMode, setDarkMode }}>
        {children}
    </DarkModeContext.Provider>
  )
}
