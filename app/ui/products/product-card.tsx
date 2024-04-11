import { BellIcon, CheckIcon } from "@radix-ui/react-icons"
import Image from "next/image"
import { data } from "@/app/_data"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Switch } from "@/components/ui/switch"

export interface ProductProp {

  id: string;
  name: string;
  image: string;


  price: string;
}

interface Prop {
  product: ProductProp;
  index: number;
  
}

export function CardDemo({ product }: Prop) {
  return (
    <section className="flex flex-col">
      <Card className="max-w-sm relative w-full border-none p-0">
        <CardContent className="relative w-full h-[37vh]">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="rounded-xl"
          />
        </CardContent>
      </Card>

      <div className="flex flex-col md:flex-row justify-between items-center gap-1 py-2">
        <p className="font-bold text-xl line-clamp-1 w-full md:w-auto md:flex-grow-0">
          {product.name}
        </p>
        <p className="text-sm text-muted-foreground w-full md:w-auto md:flex-grow-0 md:text-right">
          {product.price}
        </p>
      </div>
    </section>
  );
}
