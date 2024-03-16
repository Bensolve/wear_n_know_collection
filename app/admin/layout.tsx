
import Sidebar from "@/components/sidebar/sidebar"
import styles from "@/components/dashboard.module.css"
import React, { ReactNode } from "react";

interface LayoutProps {
    children: ReactNode;
  }
const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className={styles.container}>
    <div className={styles.menu}>
      <Sidebar/>
    </div>
    <div className={styles.content}>
      {/* <Navbar/> */}
      {children}
      {/* <Footer/> */}
    </div>
  </div>
  )
}

export default Layout