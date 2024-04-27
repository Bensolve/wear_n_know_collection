import Link from "next/link";
import { Home, LineChart, Package, Package2, PanelLeft, ShoppingCart, Users2, } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import Image from "next/image";

const Sidebar = () => {
  return (
    <div>
      <aside className="fixed inset-y-0 left-0 z-10 hidden w-14 flex-col border-r bg-background sm:flex">
        <nav className="flex flex-col items-center gap-4 px-2 py-4">
          <Link href="#" >

            <Image src="/logo.png" width={28} height={28} alt="Logo" />
            <span className="sr-only">Wear_n_know</span>
          </Link>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Link href="#" className="flex h-9 w-9 items-center justify-center rounded-lg bg-accent text-accent-foreground transition-colors hover:text-foreground md:h-8 md:w-8">
                  <Package className="h-5 w-5" />
                  <span className="sr-only">Products</span>
                </Link>
              </TooltipTrigger>
              <TooltipContent side="right">Products</TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </nav>
      </aside>
      <Sheet>
        <SheetTrigger asChild>
          <Button size="icon" variant="outline" className="sm:hidden">
            <PanelLeft className="h-5 w-5" />
            <span className="sr-only">Toggle Menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="sm:max-w-xs">
          <nav className="grid gap-6 text-lg font-medium">
            <Link
              href="#"
              className="group flex h-10 w-10 shrink-0 items-center justify-center gap-2 rounded-full bg-primary text-lg font-semibold text-primary-foreground md:text-base"
            >
              <Image src="/logo.png" width={28} height={28} alt="Logo" />
              <span className="sr-only">Wear_n_know</span>
            </Link>
            <Link
              href="#"
              className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
            >


              <Package className="h-5 w-5" />
              Products
            </Link>


          </nav>
        </SheetContent>
      </Sheet>
    </div>



  );
}

export default Sidebar