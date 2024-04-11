// components/MovieList.tsx
import Image from "next/image";
// import { fetchLatestProducts } from "@/lib/data";
import { data } from "@/app/_data";



export default async function ProductList() { // Remove props
  // const products = await fetchLatestProducts();
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">

        
          <div className="text-2xl font-bold tracking-tight text-gray-900">Popular Categories</div>
      

          <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
        

          {data.map((product) => (
            <div key={product.id.toString() as unknown as string} className="group relative">
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
              
                <Image
                  src={product.image}
                  alt={product.name}
                  width={300}
                  height={300}
                  className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                    
                  
                />
              </div>


              <div className="mt-4 flex justify-between">
                <div>
                  
                  <h3 className="text-sm text-gray-700">{product.name}</h3>
                  
                </div>
                <p className="text-sm font-medium text-gray-900">{product.price}</p>

              </div>

            </div>
          ))}


        </div>
        

      </div>


    </div>
  );
};

// export default ProductList;
