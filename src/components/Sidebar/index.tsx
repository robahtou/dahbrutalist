'use client';

import styles from './styles.module.css';


interface SidebarProps {
  children: React.ReactNode;
}

function Sidebar({ children }: SidebarProps) {
  return (
    <div className={styles['sidebar']}>
      {children}
    </div>
  );
}


export default Sidebar;
