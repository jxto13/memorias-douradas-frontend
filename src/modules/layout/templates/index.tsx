import Footer from "@modules/layout/templates/footer"
import Nav from "@modules/layout/templates/nav"
import React from "react"
import { ThemeProvider } from 'next-themes'

const Layout: React.FC = ({ children }) => {
  return (
    <ThemeProvider >
    <div>
      <Nav />
      <main className="relative">{children}</main>
      <Footer />
    </div>
    </ThemeProvider> 
  )
}

export default Layout
