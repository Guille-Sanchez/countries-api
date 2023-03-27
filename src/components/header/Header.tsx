import { IconMoonFill } from '../../assets/icons'
import './styles.css'

export const Header = (): JSX.Element => {
  return (
    <header className='header header-dark-mode'>
      <h1>Where in the world?</h1>
      <div className='toggle-dark-light-mode'>
        <button aria-label='dark mode'>
          <IconMoonFill fill='#FFFFFF'/>
        </button>
        <p>Dark Mode</p>
      </div>
    </header>
  )
}
