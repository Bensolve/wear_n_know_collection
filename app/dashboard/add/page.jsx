
import Link from "next/link"
import {
    ChevronLeft,
 
} from "lucide-react"


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
  
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"


import { addProduct } from "@/app/lib/actions";


const AddProductPage = () => {
    return (
        <div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-14 ">
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
                            <BreadcrumbPage>Add Product</BreadcrumbPage>
                        </BreadcrumbItem>
                    </BreadcrumbList>
                </Breadcrumb>
            </header>
            <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8">
            <div className=" grid max-w-[1159rem] flex-1 auto-rows-max gap-4">
                    <div className="flex items-center gap-4">
                        <Link href="/dashboard">
                            <Button variant="outline" size="icon" className="h-7 w-7">
                                <ChevronLeft className="h-4 w-4" />
                                <span className="sr-only">Back</span>
                            </Button>
                        </Link>

                        <h1 className="flex-1 shrink-0 whitespace-nowrap text-xl font-semibold tracking-tight sm:grow-0">
                            Add product
                        </h1>
                      
                    </div>
                    <div className="">
                        <div className="">
                            <Card x-chunk="dashboard-07-chunk-0">
                                <CardHeader>
                                    <CardTitle>Product Details</CardTitle>
                                    <CardDescription>
                                        Lipsum dolor sit amet, consectetur adipiscing elit
                                    </CardDescription>
                                </CardHeader>
                                <CardContent>
                    
                                    <form action={addProduct}   >
                                        <div className="">
                                            <div className="">
                                                <Label htmlFor="name">Title</Label>
                                                <Input
                                                    name="title"
                                                    type="text"
                                                    className="w-full"
                                                    defaultValue="title"
                                                    required
                                                />

                                            </div>
                                            <div className="">
                                                <Label htmlFor="price">Price</Label>
                                                <Input
                                                    name="price"
                                                    type="number"
                                                   
                                                    required
                                                />

                                            </div>
                                            <div className="">
                                                <Label htmlFor="stock">Stock</Label>
                                                <Input
                                                    name="stock"
                                                    type="number"
                                                  
                                                    required
                                                />

                                            </div>
                                            <div className="">
                                                <Label htmlFor="color">Color</Label>
                                                <Input
                                                    name="color"
                                                    type="text"
                                                    defaultValue="color"
                                                    required
                                                />

                                            </div>
                                            <div className="">
                                                <Label htmlFor="size">Size</Label>
                                                <Input
                                                    name="size"
                                                    type="number"
                                                    defaultValue="size"
                                                    required
                                                />

                                            </div>



                                            <div className="">
                                                <Label htmlFor="image">Image</Label>
                                                
                                                <Input
                                                    type="file"
                                                    name="img"
                                                    accept="image/*"
                                                />
                                                  
                                            </div>

                                        </div>
                                        <div className="flex items-center justify-end mt-4">
                                            <Button variant="outline" size="sm">
                                                Discard
                                            </Button>
                                            <Button size="sm" type="submit">
                                                Add Product
                                            </Button>
                                        </div>
                                    </form>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </div>
            </main>
            {/* <form action={addProduct} className="flex flex-col justify-between my-20">

       
       
       
        <textarea
          required
          name="desc"
          id="desc"
          rows="16"
          placeholder="Description"
        ></textarea>
        <button type="submit">Submit</button>
      </form> */}
        </div>
    );
};

export default AddProductPage;