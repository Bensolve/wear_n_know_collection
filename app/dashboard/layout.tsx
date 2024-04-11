import { ProductSidebar} from "@/app/ui/dashboard/sidebar";
export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
  <section>
    < ProductSidebar/>
    {children}
  </section>
  )
}