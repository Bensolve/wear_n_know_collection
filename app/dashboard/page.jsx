import Image from "next/image";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from '@/components/ui/breadcrumb'
import { Input } from '@/components/ui/input'
import { File, PlusCircle, MoreHorizontal } from 'lucide-react'
import Searchbar from "@/app/ui/dashboard/search"
import Pagination from "@/app/ui/dashboard/pagination";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"

import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import Link from "next/link";
import { fetchProducts } from "@/app/lib/data";
import { deleteProduct } from "@/app/lib/actions";

const ProductsPage = async ({ searchParams }) => {
  const q = searchParams?.q || "";
  const page = searchParams?.page || 1;
  const { count, products } = await fetchProducts(q, page);


  return (
    <div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-14">
      <header className="sticky top-0 z-30 flex h-14 items-center gap-4 border-b bg-background px-4 sm:static sm:h-auto sm:border-0 sm:bg-transparent sm:px-6">

        <Breadcrumb
          className="hidden md:flex" x-chunk="dashboard-06-chunk-0"
        >
          <BreadcrumbList>

            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link href="#">Products</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>All Products</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        <Searchbar placeholder="Search for a product..." />
      </header>
      <div className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8">
        <Tabs defaultValue="all">
          <div className="flex items-center">
            <TabsList>
              <TabsTrigger value="all">All</TabsTrigger>

            </TabsList>
            <div className="ml-auto flex items-center gap-2">

              <Button size="sm" variant="outline" className="h-7 gap-1">
                <File className="h-3.5 w-3.5" />
                <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
                  Export
                </span>
              </Button>
              <Link href="/dashboard/add">
                <Button size="sm" className="h-7 gap-1">
                  <PlusCircle className="h-3.5 w-3.5" />
                  <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
                    Add Product
                  </span>
                </Button>
              </Link>
            </div>
          </div>
          <TabsContent value="all">
            <Card x-chunk="dashboard-06-chunk-1">
              <CardHeader>
                <CardTitle>Products</CardTitle>
                <CardDescription>
                  Manage your products
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>


                      <TableHead className='hidden w-[100px] sm:table-cell'> Image</TableHead>
                      <TableHead className="w-[20%]">Title</TableHead>

                      <TableHead>Price</TableHead>

                      <TableHead className='hidden md:table-cell'
                      >Created At</TableHead>
                      <TableHead>Stock</TableHead>
                      <TableHead>
                        <span className="sr-only">Actions</span>
                      </TableHead>
                    </TableRow>
                  </TableHeader>

                  <TableBody>
                    {products.map((product) => (
                      <TableRow key={product.id}>
                        <TableCell className="hidden sm:table-cell">
                          <Image
                            src={`/uploads/${product.img || "noproduct.jpg"}`}
                            alt="Product image"
                            className="aspect-square rounded-md object-cover"
                            height={64}
                            width={64}
                          />
                        </TableCell>
                        <TableCell className="font-medium">
                          {product.title}
                        </TableCell>

                        <TableCell>${product.price}</TableCell>
                        <TableCell className='hidden md:table-cell'>{product.createdAt?.toString().slice(4, 16)}</TableCell>
                        <TableCell>{product.stock}</TableCell>
                        <TableCell>
                          <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                              <Button
                                aria-haspopup="true"
                                size="icon"
                                variant="ghost"
                              >
                                <MoreHorizontal className="h-4 w-4" />
                                <span className="sr-only">Toggle menu</span>
                              </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                              <DropdownMenuLabel>Actions</DropdownMenuLabel>
                              <Link href={`/dashboard/${product.id}`}>
                                <DropdownMenuItem>
                                  <Button>View</Button>
                                </DropdownMenuItem>
                              </Link>




                              <DropdownMenuItem  >
                                <form action={deleteProduct}>
                                  <Input type="hidden" name="id" value={product.id} />
                                  <Input type="hidden" name="img" value={product.img} />
                                  <Button>Delete</Button>
                                </form>
                              </DropdownMenuItem>


                            </DropdownMenuContent>
                          </DropdownMenu>
                        </TableCell>
                      </TableRow>


                    ))}
                  </TableBody>
                </Table>
              </CardContent>
              <CardFooter>
               
              </CardFooter>
              <div className="text-xs text-muted-foreground">
                  <Pagination count={count} />
                 
                </div>
            </Card>
          </TabsContent>
        </Tabs>

      </div>

    </div>
  );
};

export default ProductsPage;
