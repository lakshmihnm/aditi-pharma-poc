"use client";
import Link from 'next/link';
import Image from 'next/image';
import logo from '../public/file.svg';
import styles from './Header.module.css';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Header() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setIsLoggedIn(localStorage.getItem('isLoggedIn') === 'true');
    window.addEventListener('storage', () => {
      setIsLoggedIn(localStorage.getItem('isLoggedIn') === 'true');
    });
    return () => {
      window.removeEventListener('storage', () => {});
    };
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn');
    setIsLoggedIn(false);
    router.push('/login');
  };

  return (
    <header className={styles.header}>
      <div className={styles.left}>
        <Image src={logo} alt="Logo" width={32} height={32} />
        <span className={styles.name}>Arati Labs</span>
      </div>
      <nav className={styles.right}>
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/contact">Contact</Link>
        {isLoggedIn ? (
          <button onClick={handleLogout} style={{ background: 'none', border: 'none', color: '#444', fontWeight: 500, cursor: 'pointer' }}>Logout</button>
        ) : (
          <Link href="/login">Login</Link>
        )}
      </nav>
    </header>
  );
}
