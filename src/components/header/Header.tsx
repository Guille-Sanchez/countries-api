
import { useContext } from 'react'
import { IconMoon, IconMoonFill } from '../../assets/icons'
import { DarkModeContext } from '../../context/DarkMode'
import './styles.css'

export const Header = (): JSX.Element => {
  const { darkMode, setDarkMode } = useContext(DarkModeContext)

  return (
    <header className={`header ${darkMode ? 'header-dark-mode' : 'header-light-mode'}`}>
      <h1>Where in the world?</h1>
        <button aria-label='dark mode' className='toggle-dark-light-mode'
          onClick={() => { setDarkMode(() => !darkMode) }}
        >
          {
            darkMode
              ? <IconMoonFill fill='#FFFFFF'/>
              : <IconMoon/>
          }
          <p>Dark Mode</p>
        </button>
    </header>
  )
}
