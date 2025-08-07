'use client';

import Link             from 'next/link';
import { usePathname }  from 'next/navigation';
import {
  useState,
  useEffect
}                     from 'react';

import styles from './styles.module.css';


const navItems = [
  { name: '[HOME]', href: '/' },
  { name: '[BLOG]', href: '/blog' },
  { name: '[ABOUT]', href: '/about' }
];

interface NavigationProps {}

function Navigation({}: NavigationProps) {
  const pathname = usePathname();
  const [isBlogPost, setIsBlogPost] = useState(false);

  useEffect(() => {
    // AIDEV-NOTE: Check if the current page is a blog post.
    // A blog post path will look like /blog/[slug], so it will have more than 2 segments.
    // This logic is moved into useEffect to prevent hydration errors.
    setIsBlogPost(pathname.startsWith('/blog/') && pathname.split('/').length > 2);
  }, [pathname]);

  return (
    <nav className={styles['nav']}>
      <div className={styles['navContent']}>
        <div className={styles['navList']}>
          {isBlogPost ? (
            <Link href="/blog" className={`${styles['navItem']} ${styles['backToIndex']}`}>
              ← [BACK_TO_INDEX]
            </Link>
          ) : (
            navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`${styles['navItem']} ${
                  pathname === item.href ? styles['active'] : styles['inactive']
                }`}
              >
                {item.name}
              </Link>
            ))
          )}
        </div>
      </div>
    </nav>
  );
}


export default Navigation;
