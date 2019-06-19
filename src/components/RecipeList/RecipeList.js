import React from 'react'
import { Link } from 'react-router-dom'
import { Section } from '../Utils/Utils'
import './RecipeList.css'

import RecipeCard from '../RecipeCard/RecipeCard'

function RecipeList() {
  return (
    <Section className="recipe-list">
      <Section className="add-recipe">
          <Link className="add-recipe-btn" to='/add-recipe'>+ Add Recipe</Link>
      </Section>
      <RecipeCard />
    </Section>
  )
}

export default RecipeList