


import { Button } from '@/components/ui/button';
import Products from '../ui/frontend/products';
import BackgroundImages from '../ui/frontend/background-images';




export default  function Home() {
 
  return (

    <div className='mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8 '>
      <div className="grid items-center grid-cols-1 lg:grid-cols-2  gap-40 sm:p-16 py-16 px-8">
        <div>
          <h1 className="text-2xl  tracking-tight text-gray-900 sm:text-6xl">
            Wear_N_KNOW
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Explore the latest trends in fashion at wear_n_know collection.
          </p>
          <div className="mt-10 ">
            <Button>Shop Now</Button>
          </div>
        </div>
        <BackgroundImages />
      </div>

      

      <main className="sm:p-16 py-16 px-8 flex flex-col gap-10">
        {/* <h2 className="text-3xl  font-bold">Latest Product</h2> */}

        <Products/>
      </main>

    </div>





  );
}
