import React from "react"
import Info from "../src/components/Info"
import About from "../src/components/About"
import Interest from "../src/components/Interest"
import Footer from "./components/Footer"

export default function App() {
  return (
    <div className="main-container">
      <Info />
      <About />
      <Interest />
      <Footer />
    </div>
  )
}

