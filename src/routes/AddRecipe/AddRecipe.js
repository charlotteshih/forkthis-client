import React, { Component } from 'react'
import { Section } from '../../components/Utils/Utils'
import AddRecipeForm from '../../components/AddRecipeForm/AddRecipeForm'
import './AddRecipe.css'

class AddRecipe extends Component {
	render() {
		return (
				<Section className="add-recipe-form">
					<h2>Add Recipe</h2>
					<AddRecipeForm />
				</Section>
		)
	}
}

export default AddRecipe