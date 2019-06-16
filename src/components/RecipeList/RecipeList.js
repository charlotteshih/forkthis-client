import React from 'react'
import {Link} from 'react-router-dom'
import { Section } from '../Utils/Utils'
import RecipeCard from '../RecipeCard/RecipeCard'
import './RecipeList.css'

function RecipeList() {
  return (
    <Section className="recipe-list">
      <Section className="add-recipe">
          <Link className="add-recipe=btn" to='/add-recipe'>+ Add Recipe</Link>
      </Section>
      <RecipeCard />
    </Section>
  )
}

export default RecipeList