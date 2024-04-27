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
    <div className="bg-white">
      <div className="mx-auto px-4 py-6">
        <h2 className="text-2xl font-bold tracking-tight text-text">Our Latest Products</h2>
        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-5 xl:gap-x-8">
          {products.map((product) => (
            <div key={product.id} className="group relative">
              <div className="group block overflow-hidden border border-accent rounded-xl border-opacity-10">
              <Image
                      src={`/uploads/${product.img || "noproduct.jpg"}`}
                      alt=""
                      width={240}
                      height={240}
                      className="absolute inset-0 h-full w-full object-contain opacity-100 group-hover:opacity-0"
                    />
                <div className="p-1">
                  {/* Product details */}
                  <div className="relative h-[300px] sm:h-[300px]">
                  <img
                       src={`/uploads/${product.img || "noproduct.jpg"}`}
                      alt=""
                      className="absolute inset-0 h-full w-full object-contain opacity-0 group-hover:opacity-100"
                    />
                  </div>
                  <div className="relative  p-3 border-t">
                    <Link href={'/products/' + product.id}>
                      <h3 className="text-md text-gray-700 group-hover:underline group-hover:underline-offset-4 truncate">
                        {product.title}
                        {/* {product.desc}
                        {product.stock}
                        {product.color} */}
                      </h3>
                    </Link>
                    <div className="mt-1.5 flex items-center justify-between text-text">
                      <p className="tracking-wide text-primary">₵ {formatPrice(product.price)}</p>
                      {/* Add to cart button */}
                      <button
                       
                        type="button"
                        className="flex items-center divide-x rounded-lg border border-primary bg-white text-center text-md font-medium text-secondary-700 shadow-sm hover:bg-gray-100"
                      >
                        {/* Add to cart icon */}
                        <div className="flex items-center space-x-2 py-2.5 px-3">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="w-5 h-5"
                          >
                            {/* Cart icon */}
                          </svg>
                          <span>Add</span>
                        </div>
                        {/* Cart count */}
                        {/* <div className="py-2.5 px-3">18</div> */}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
