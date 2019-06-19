import React from 'react'
import '../IngredientsList/IngredientsList.css'
import recipes from '../../dummyData/dummyRecipes'

function StepsList(props) {
  return (
    <ol>
      {recipes[props.recipeId].steps.map(step => {
          return (
            step.step.length > 1
            ? <li key={step.id}>{step.step}</li>
            : <li className="blank-li" key={step.id}></li>
          )
        })}
    </ol>
  )
}

export default StepsList