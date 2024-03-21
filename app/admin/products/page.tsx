"use client";
import React from 'react'
import Image from 'next/image';

import { useEffect, useState } from 'react';
import Products from '@/components/Products';
import ProductList from '@/components/productList';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import styles from '@/components/Products/products.module.css'
import { Product } from "@/constants/index";



interface AdminProductTableProps {
  products: Product[];
}


const ProductPage : React.FC<AdminProductTableProps> = ({ products }) => {
  const [fetchedProducts, setFetchedProducts] = useState<Product[]>([]);

  // Effect hook to fetch products from the API
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        // Fetch products from the API endpoint
        const response = await fetch('/api/product'); // Update with your actual API route
        const data = await response.json();
        setFetchedProducts(data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts(); // Call the fetchProducts function when the component mounts
  }, []);
  return (
    // <div className='flex justify-between '>
    //    <div>
    //   <ProductList products={product} />
    //   </div>
    //   <div>
    //   <Link href="/admin/products/add">
    //     <Button>Add New</Button>
    //   </Link>
    //   </div>
     
     
    // </div>
    <div className={styles.container}>
      <div className={styles.top}>
        {/* <Search placeholder="Search for a product..." /> */}
        <Link href="/admin/products/add">
          <button className={styles.addButton}>Add New</button>
        </Link>
      </div>
      <table className={styles.table}>
        <thead>
          <tr>
            <td>Name</td>
           
            <td>Price</td>
            <td>Action</td>
          </tr>
        </thead>
        <tbody>
        {fetchedProducts.map((product) =>  (
            <tr key={product._id}>
              <td>
                <div className={styles.product}>
                  <Image
                    src={`/assets/images/${product.image}`}
                    alt=""
                    width={40}
                    height={40}
                    className={styles.productImage}
                  />
                  {product.name}
                </div>
              </td>
             
              <td>${product.price}</td>
            
           
              <td>
                <div className={styles.buttons}>
                  <Link href={`/dashboard/products/${product._id}`}>
                    <button className={`${styles.button} ${styles.view}`}>
                      View
                    </button>
                  </Link>
                  <form >
                    <input type="hidden" name="id" value={product._id} />
                    <button className={`${styles.button} ${styles.delete}`}>
                      Delete
                    </button>
                  </form>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {/* <Pagination count={count} /> */}
    </div>


  )
}

export default ProductPage