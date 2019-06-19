import React from 'react'
import './IngredientsList.css'
import recipes from '../../dummyData/dummyRecipes'

function IngredientsList(props) {
  return (
    <ul>
      {recipes[props.recipeId].ingredients.map(ing => {
            return (
              ing.item.length >= 1
              ? <li key={ing.id}>{ing.item}</li>
              : <li className="blank-li" key={ing.id}></li>
            )
        })}
    </ul>
  )
}

export default IngredientsList