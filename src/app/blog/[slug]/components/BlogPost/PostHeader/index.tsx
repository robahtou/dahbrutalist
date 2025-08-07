'use client';

import { useState, useEffect } from 'react';
import Button from '@Components/Button';
import styles from './styles.module.css';
import { BlogPost } from '../data';


interface PostHeaderProps {
  post: BlogPost;
  onBack: () => void;
  toggleTheme: () => void;
}

function PostHeader({ post, onBack, toggleTheme }: PostHeaderProps) {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  useEffect(() => {
    const root = document.documentElement;
    const initialTheme = root.getAttribute('data-theme');
    if (initialTheme === 'light' || initialTheme === 'dark') {
      setTheme(initialTheme);
    }
  }, []);

  const handleToggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
    toggleTheme();
  };

  return (
    <div className={styles['headerContent']}>
      <div className={styles['headerNav']}>
        <Button onClick={onBack}>
          ← [BACK_TO_INDEX]
        </Button>
        <Button onClick={handleToggleTheme}>
          [{theme === "dark" ? "LIGHT_MODE" : "DARK_MODE"}]
        </Button>
      </div>

      <div className={styles['postGrid']}>
        <div className={styles['postMain']}>
          <div className={styles['postMeta']}>
            <div className={styles['postMetaInfo']}>
              <div className={styles['postCategory']}>
                {post.category}
              </div>
              <span className={styles['postDate']}>{post.date}</span>
              <div className={styles['statusIndicator']}></div>
              <span className={styles['statusText']}>STATUS: PUBLISHED</span>
            </div>
            <h1 className={styles['postTitle']}>{post.title}</h1>
            <div className={styles['tags']}>
              {post.tags.map((tag: string) => (
                <span key={tag} className={styles['tag']}>
                  #{tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


export default PostHeader;
