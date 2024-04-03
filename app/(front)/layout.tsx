import Navbar from '@/components/Navbar'
 
export default function FrontLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      
      <Navbar />
     
     {children}
    </div>
  );
}