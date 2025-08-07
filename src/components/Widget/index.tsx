'use client';

import styles from './styles.module.css';


interface WidgetProps {
  title: string;
  children: React.ReactNode;
  className?: string;
}

function Widget({ title, children, className }: WidgetProps) {
  return (
    <div className={`${styles['sidebarWidget']} ${className || ''}`}>
      <h3 className={styles['sidebarTitle']}>{title}</h3>
      <div className={styles['sidebarContent']}>
        {children}
      </div>
    </div>
  );
}


export default Widget;
