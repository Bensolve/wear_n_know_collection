"use client"
import * as React from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
    type CarouselApi,
} from "@/components/ui/carousel"
import Image from "next/image"


export default function Hero() {
    const [api, setApi] = React.useState<CarouselApi>()
    const [current, setCurrent] = React.useState(0)
    const [count, setCount] = React.useState(0)

    React.useEffect(() => {
        if (!api) {
            return
        }

        setCount(api.scrollSnapList().length)
        setCurrent(api.selectedScrollSnap() + 1)

        api.on("select", () => {
            setCurrent(api.selectedScrollSnap() + 1)
        })
    }, [api])

    return (
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8 ">
            <div className="grid items-center grid-cols-1 lg:grid-cols-2  gap-30">
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


                <Carousel setApi={setApi} className="w-full max-w-md">
                    <CarouselContent>
                        {Array.from({ length: 5 }).map((_, index) => (
                            <CarouselItem key={index}>
                                <Card>
                                    <CardContent className="flex aspect-square items-center justify-center p-6">
                                        <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">

                                            <Image
                                                src="/assets/images/prod1.jpg"
                                                alt={'heoo'}
                                                width={300}
                                                height={500}
                                                className="h-full w-full object-cover object-center lg:h-full lg:w-full"


                                            />
                                        </div>
                                    </CardContent>
                                </Card>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious />
                    <CarouselNext />
                </Carousel>
                {/* <div className="py-2 text-center text-sm text-muted-foreground">
                Slide {current} of {count}
            </div> */}

            </div>
        </div>


    )
}
