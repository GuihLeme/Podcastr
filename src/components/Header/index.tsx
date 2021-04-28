import format from 'date-fns/format';
import ptBR from 'date-fns/locale/pt-BR';
import { FiSun, FiMoon } from 'react-icons/fi';
import { useTheme } from '../../contexts/ThemeContext';

import styles from  './styles.module.scss'

export function Header() {
  const { toggleTheme, isDarkTheme} = useTheme();

  const currentDate = format(new Date(), 'EEEEEE, d MMMM', {
    locale: ptBR,
  })

  return (
    <header className={isDarkTheme ? styles.darkTheme : styles.headerContainer}>
      <img src="/logo.svg" alt="Podcastr"/>
      <p>O melhor para você ouvir, sempre.</p>
      <span>{currentDate}</span>
      <button type='button' onClick={toggleTheme} >
        {isDarkTheme ? (
          <FiSun size={20} color={'#fff'} />
        ) : (
          <FiMoon size={20} />
        )}

      </button>

    </header>
  )
}