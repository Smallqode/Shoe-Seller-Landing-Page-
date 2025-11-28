import React from 'react'
import Buttons from '../Components/Buttons'
import "./Recommended.css"

const Recommended = ({handleClick}) => {
  return (
    <div>
      <h2 className='recommended-title'>Recommended</h2>
      <div className="recommended-flex">
        <Buttons onClickHandler={handleClick} value="" title="All Products"></Buttons>
        <Buttons onClickHandler={handleClick} value="Nike" title="Nike"></Buttons>
        <Buttons onClickHandler={handleClick} value="Adidas" title="Adidas"></Buttons>
        <Buttons onClickHandler={handleClick} value="Puma" title="Puma"></Buttons>
        <Buttons onClickHandler={handleClick} value="Vans" title="Vans"></Buttons>
      </div>
    </div>
  )
}

export default Recommended