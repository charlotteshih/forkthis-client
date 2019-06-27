import React from 'react'
import { Section } from '../Utils/Utils'
import { Link } from 'react-router-dom'
import './AddRecipeButton.css'

function AddRecipeButton() {
  return (
    <Section className="add-recipe-btn">
      <Link className="cta-btn" to='/add-recipe'>+ Add Recipe</Link>
    </Section>
  )
}

export default AddRecipeButton