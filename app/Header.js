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
        <Link href="/dashboard" className={styles.name} style={{ textDecoration: 'none', color: '#222', fontWeight: 700, fontSize: '1.3rem', marginLeft: 8 }}>
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
            <button onClick={handleLogout} style={{ background: 'none', border: 'none', color: '#444', fontWeight: 500, cursor: 'pointer' }}>Logout</button>
          </>
        )}
      </nav>
    </header>
  );
}
