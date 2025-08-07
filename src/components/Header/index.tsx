'use client';

import { useState, useEffect }  from 'react';
import Button                   from '@Components/Button';
import styles                   from './styles.module.css';


interface HeaderProps {}

function Header({}: HeaderProps) {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

    useEffect(() => {
      const initialTheme = document.documentElement.getAttribute('data-theme');
      if (initialTheme === 'light' || initialTheme === 'dark') {
        setTheme(initialTheme);
      }
    }, []);

    const handleToggleTheme = () => {
      const newTheme = theme === 'light' ? 'dark' : 'light';
      setTheme(newTheme);
      document.documentElement.setAttribute('data-theme', newTheme);
    };

  return (
    <header className={styles['header']}>
      <div className={styles['headerContent']}>
        <div className={styles['headerMain']}>

          <div>
            <h1 className={styles['headerTitle']}>DahBRUTALIST</h1>
            <div className={styles['headerSubtitleContainer']}>
              <div className={styles['headerSubtitleIcon']}></div>
              <span className={styles['headerSubtitle']}>BLOG.SYSTEM</span>
            </div>
          </div>

          <div className={styles['headerMeta']}>
            <Button
              className={styles['headerThemeButton']}
              onClick={handleToggleTheme}
            >
              [{theme === 'dark' ? 'LIGHT_MODE' : 'DARK_MODE'}]
            </Button>

            <div className={styles['headerMetaText']}>
              SYSTEM.STATUS: ONLINE
              <br />
              LAST.UPDATE: 2025.08.05
              <br />
              POSTS.COUNT: {'5'.toString().padStart(3, '0')}
            </div>
          </div>

        </div>
      </div>
    </header>
  );
}


export default Header;
