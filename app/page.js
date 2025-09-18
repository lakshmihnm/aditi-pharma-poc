"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import ProductsList from "./ProductsList";
import { products } from "./products";

export default function Home() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const loggedIn = localStorage.getItem('isLoggedIn') === 'true';
    setIsLoggedIn(loggedIn);
    if (!loggedIn) {
      router.replace('/dashboard');
    }
  }, [router]);

  if (!isLoggedIn) return null;

  return (
    <div>
      <ProductsList products={products} />
    </div>
  );
}
