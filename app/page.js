import Image from "next/image";
import ProductsList from "./ProductsList";
import {products} from "./products"

export default function Home() {
  return (
    <div>
      <ProductsList products={products} />
    </div>
  );
}
