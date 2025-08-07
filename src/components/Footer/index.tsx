'use client';

import styles from './styles.module.css';


interface FooterProps {
  postId?: number;
}

function Footer({ postId }: FooterProps) {
  return (
    <footer className={styles['footer']}>
      <div className={styles['footerContent']}>
        <div className={styles['footerInner']}>
          <div>
            <p className={styles['footerBrand']}>DAHBRUTALIST © 2025 - DEV.OR.DIE</p>
          </div>
          <div className={styles['footerMeta']}>
            {postId ? `POST.ID: ${postId.toString().padStart(3, '0')} | ` : ''}
            TZAR.BUILT.THIS
          </div>
        </div>
      </div>
    </footer>
  );
}


export default Footer;
