'use client';

import styles from './styles.module.css';


interface ButtonProps {
  children    : React.ReactNode;
  className?  : string;
  onClick     : () => void;
}

function Button({ onClick, children, className }: ButtonProps) {
  return (
    <button onClick={onClick} className={`${styles['button']} ${className || ''}`}>
      {children}
    </button>
  );
}


export default Button;
