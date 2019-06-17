import React from 'react'
import recipes from '../../dummyData/dummyRecipes'

function FoldersList(props) {
  return (
    <ol>
      {
        recipes[props.recipeId].steps.map(step => {
          return (
            <li key={step.id}>
              {step.step}
            </li>
          )
        })
      }
    </ol>
  )
}

export default FoldersList