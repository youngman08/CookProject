import React from 'react'
import FoodCard from './FoodCard'

function FoodList({foods }) {
  return (
    <>
      {foods.map((food) => (
        <FoodCard key={food.id} food={food} />
      ))}
      {console.log(foods)}
    </>
  )
}

export default FoodList
