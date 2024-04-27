
import Sidebar from "../ui/dashboard/sidebar"
import { Footer } from "../ui/frontend/footer"

const Layout = ({children}) => {
  return (
    <div>
      <div>
        <Sidebar/>
      </div>
      <div>
      
        {children}
        
      </div>
    </div>
  )
}

export default Layout