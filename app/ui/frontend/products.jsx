import React from 'react';
import Link from 'next/link'; // Import Link from Next.js
import { fetchproducts } from '@/app/lib/data';
import Image from 'next/image';

const Products = async () => {
  // const q = searchParams?.q || "";
  // const page = searchParams?.page || 1;
  const { count, products } = await fetchproducts();
  //   const products = [
  //     {
  //       id: "1",
  //       title: "First Slipper",
  //       img: ["prod1.jpg", "prod2.jpg"],
  //       price: "₵8.39",
  //     },
  //     {
  //       id: "2",
  //       title: "Ghana Slipper",
  //       img: ["prod3.jpg", "prod4.jpg"],
  //       price: "₵10.99",
  //     },
  //   ];

  const formatPrice = (price) => {
    // Implement your price formatting logic here
    return price;
  };

  return (

    <div className=' max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-5'>
      <h2 className="text-xl font-bold text-gray-900 sm:text-3xl">Our Latest Products</h2>
      <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {products.map((product) => (
          <div key={product.id} className="group block overflow-hidden">
            <div className="group block overflow-hidden">
              <div className="relative h-[350px] sm:h-[450px]">
                <img
                 src={`/uploads/${product.img || "noproduct.jpg"}`}
                  alt=""
                  className="absolute inset-0 h-full w-full object-cover opacity-100 group-hover:opacity-0"
                />

                <img
                  src={`/uploads/${product.img || "noproduct.jpg"}`}
                  alt=""
                  className="absolute inset-0 h-full w-full object-cover opacity-0 group-hover:opacity-100"
                />
              </div>

              <div className="relative bg-white pt-3">
                <h3 className="text-sm text-gray-700 group-hover:underline group-hover:underline-offset-4">
                  {product.title}
                </h3>

                <div className="mt-1.5 flex items-center justify-between">
                  <p className="tracking-wide">${product.price}</p>

                  <p className="text-xs uppercase tracking-wide">{product.stock}</p>
                </div>
              </div>
            </div>

          </div>
        ))}
      </div>

    </div>

  );
};

export default Products;
