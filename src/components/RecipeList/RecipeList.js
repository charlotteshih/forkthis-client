import React from 'react'
import { Section } from '../Utils/Utils'
import RecipeCard from '../RecipeCard/RecipeCard'
import './RecipeList.css'

function RecipeList() {
  return (
    <Section className="recipe-list">
      <RecipeCard />
    </Section>
  )
}

export default RecipeList