"use client";
import Link from 'next/link';
import Image from 'next/image';
import logo from '../public/logo-light.jpg';
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
        <Link href="/dashboard" className={styles.name}>
          Aditi Pharma
        </Link>
      </div>
      <nav className={styles.right}>
        {!isLoggedIn ? (
          <>
            {/* <Link href="/dashboard">Dashboard</Link> */}
            <Link href="/login">Login</Link>
          </>
        ) : (
          <>
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/contact">Contact</Link>
            <button onClick={handleLogout} className={styles.logoutBtn}>Logout</button>
          </>
        )}
      </nav>
    </header>
  );
}
