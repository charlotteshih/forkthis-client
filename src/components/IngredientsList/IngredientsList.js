import React from 'react'
import recipes from '../../dummyData/dummyRecipes'

function IngredientsList(props) {

  return (
    <ul>
      {
        recipes[props.recipeId].ingredients.map(ing => {
          return (
            <li key={ing.id}>
              {ing.item}
            </li>
          )
        })
      }
    </ul>
  )
}

export default IngredientsList