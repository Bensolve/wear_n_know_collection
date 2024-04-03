
import { useEffect, useState } from 'react';
import ProductList from '@/components/productList';
import Hero from '@/components/hero';



export default function Home() {
  // const [product, setProducts] = useState([]);
  // useEffect(() => {
  //   const fetchMovies = async () => {
  //     try {
  //       const response = await fetch('/api/product'); // Update with your actual API route
  //       const data = await response.json();
  //       setProducts(data);
  //     } catch (error) {
  //       console.error('Error fetching product:', error);
  //     }
  //   };

  //   fetchMovies();
  // }, []);
  return (
    <div>
       {/* <Products /> */}
      <Hero />
     
      <ProductList/>
    </div>
    
  )
}
