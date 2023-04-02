import { useContext } from 'react'
import { DarkModeContext } from '../context/DarkMode'
import './styles.css'

export const Footer = (): JSX.Element => {
  const { darkMode } = useContext(DarkModeContext)
  return (
    <footer>
      <div className={`attribution ${darkMode ? 'dark-mode' : 'light-mode'}`}>
        Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank" rel="noreferrer">Frontend Mentor</a>.
        Coded by <a href="https://guillermo-portfolio.netlify.app/">Guillermo (Chicho) Sanchez</a>.
      </div>
    </footer>
  )
}
