import {
  ChevronLeft,
  Home,
  LineChart,
  Package,
  Package2,
  PanelLeft,
  PlusCircle,
  Search,
  Settings,
  ShoppingCart,
  Upload,
  Users2,
} from "lucide-react"

import { Badge } from "@/components/ui/badge"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"




import { updateProduct } from "@/app/lib/actions";
import { fetchProduct } from "@/app/lib/data";
import Image from "next/image";
import Link from "next/link";

const SingleProductPage = async ({ params }) => {
  const { id } = params;
  const product = await fetchProduct(id);

  return (
    <div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-14">
      <header className="sticky top-0 z-30 flex h-14 items-center gap-4 border-b bg-background px-4 sm:static sm:h-auto sm:border-0 sm:bg-transparent sm:px-6">
        <Breadcrumb className="hidden md:flex">
          <BreadcrumbList>


            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link href="#">Products</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Edit Product</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </header>
      <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8">
        <div className="grid max-w-[59rem] flex-1 auto-rows-max gap-4">
          <div className="flex items-center gap-4">
            <Link href="/dashboard">
              <Button variant="outline" size="icon" className="h-7 w-7">
                <ChevronLeft className="h-4 w-4" />
                <span className="sr-only">Back</span>
              </Button>
            </Link>

            <h1 className="flex-1 shrink-0 whitespace-nowrap text-xl font-semibold tracking-tight sm:grow-0">
              Update product
            </h1>
            {/* <div className="hidden items-center gap-2 md:ml-auto md:flex">
                            <Button variant="outline" size="sm">
                                Discard
                            </Button>
                            <Button size="sm">Save Product</Button>
                        </div> */}
          </div>
          <div className="grid gap-4 md:grid-cols-[1fr_250px] lg:grid-cols-3 lg:gap-8">
            <div className="grid auto-rows-max items-start gap-4 lg:col-span-2 lg:gap-8">
              <Card x-chunk="dashboard-07-chunk-0">
                <CardHeader>
                  <CardTitle>Product Details</CardTitle>
                  <CardDescription>
                    Lipsum dolor sit amet, consectetur adipiscing elit
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-5 my-3">

                    {product.title}
                    <Image src={`/uploads/${product.img || "noproduct.jpg"}`}
                      alt=""
                      width={50}
                      height={50}
                    />

                  </div>
                  <form action={updateProduct}>
                    <Input type="hidden" name="id" value={product.id} />
                    <div className="">
                      <div className="grid gap-3">
                        <Label htmlFor="title">Title</Label>
                        <Input
                          name="title"
                          type="text"
                          className="w-full"
                          placeholder={product.title}
                        />
                      </div>
                     
                      <div className="grid gap-3">
                        <Label htmlFor="price">Price</Label>
                        <Input
                          name="price"
                          type="number"
                          placeholder={product.price}
                        />
                      </div>
                      <div className="grid gap-3">
                        <Label htmlFor="stock">Stock</Label>
                        <Input
                          name="stock"
                          type="number"
                          placeholder={product.stock}
                        />
                      </div>
                      <div className="grid gap-3">
                        <Label htmlFor="color">Color</Label>
                        <Input
                          name="color"
                          type="number"
                          placeholder={product.color }
                        />
                      </div>
                      <div className="grid gap-3">
                        <Label htmlFor="size">Size</Label>
                        <Input
                          name="size"
                          type="number"
                          placeholder={product.size}
                        />
                      </div>
                     
          
           
                          
           
        
                      <div className="grid gap-2">
                        <Label htmlFor="image">Image</Label>
                        <Input
                          type="file"
                          name="img"
                          accept="image/*"
                          placeholder= {product.img }
                        />
                      </div>
                    </div>
                    <div className="flex items-center justify-end mt-4">
                      <Button variant="outline" size="sm">
                        Discard
                      </Button>
                      <Button size="sm" type="submit">
                        Update Product
                      </Button>
                    </div>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>

    </div>
  );
};

export default SingleProductPage;