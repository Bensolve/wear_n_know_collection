import Navbar from '@/app/ui/frontend/navbar'
import { Footer } from '../ui/frontend/footer';
 
export default function FrontLayout({ children }) {
  return (
    <div>
      
      <Navbar />
     
     {children}

     <Footer/>
    </div>
  );
}