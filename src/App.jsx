import Nav from "./Navigation/Nav"
import Products from "./Products/Products"
import Recommended from "./Recommended/Recommended"
import Category from "./Sidebar/Category/Category"
import Colors from "./Sidebar/Colors/Colors"
import Price from "./Sidebar/Price/Price"
import Sidebar from "./Sidebar/Sidebar"
import "./style.css"
import React from 'react'

const App = () => {
  return (
    <div>
      <Sidebar/>
      <Nav/>
      <Recommended/>
      <Products/>
    </div>
  )
}

export default App