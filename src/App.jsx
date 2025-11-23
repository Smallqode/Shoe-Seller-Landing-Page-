import Nav from "./Navigation/Nav"
import Products from "./Products/Products"
import Recommended from "./Recommended/Recommended"
import Category from "./Sidebar/Category/Category"
import Colors from "./Sidebar/Colors/Colors"
import Price from "./Sidebar/Price/Price"
import "./style.css"
import React from 'react'

const App = () => {
  return (
    <div>
      <Nav/>
      <Products/>
      <Recommended/>
      <Category/>
      <Colors/>
      <Price/>
    </div>
  )
}

export default App