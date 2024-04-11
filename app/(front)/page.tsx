"use client";

import { CardDemo, ProductProp } from '@/app/ui/products/product-card'
import { data } from "@/app/_data"
import { ImagesSlider } from '../ui/Hero/images-slider';
import { motion } from "framer-motion";
import { Button } from '@/components/ui/button';
import { Pagefooter } from '../ui/footer/footer';



export default function Home() {
  const images = [
    '/assets/images/prod1.jpg',
    'assets/images/prod2.jpg',
    '/assets/images/prod3.jpg',
    // Add more image URLs as needed
  ];

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
        <ImagesSlider className="h-[20rem] w-[30rem]" images={images}>
          <motion.div
            initial={{
              opacity: 0,
              y: -80,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.6,
            }}
            className="z-50 flex flex-col justify-center items-center"
          >
            {/* <motion.p className="font-bold text-xl md:text-6xl text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 py-4">
          The hero section slideshow <br /> nobody asked for
        </motion.p> */}
            {/* <button className="px-4 py-2 backdrop-blur-sm border bg-emerald-300/10 border-emerald-500/20 text-white mx-auto text-center rounded-full relative mt-4">
          <span>Join now →</span>
          <div className="absolute inset-x-0  h-px -bottom-px bg-gradient-to-r w-3/4 mx-auto from-transparent via-emerald-500 to-transparent" />
        </button> */}
          </motion.div>
        </ImagesSlider>
      </div>

      <main className="sm:p-16 py-16 px-8 flex flex-col gap-10">
        <h2 className="text-3xl  font-bold">Explore Product</h2>

        <section className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10">
          {data.map((item: ProductProp, index) => (
            <CardDemo key={item.id} product={item} index={index} />
          ))}
        </section>

      </main>

          <Pagefooter/>

    </div>

  )
}
