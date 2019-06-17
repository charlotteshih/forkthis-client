import React from 'react'
import { Section } from '../../components/Utils/Utils'
import './AddRecipe.css'

import BackButton from '../../components/BackButton/BackButton'
import AddRecipeForm from '../../components/AddRecipeForm/AddRecipeForm'

function AddRecipe(props) {
	let history = props.history
	return (
		<Section className="add-recipe-wrapper">
			<BackButton history={history} />
			<h2>Add Recipe</h2>
			<AddRecipeForm />
		</Section>
	)
}

export default AddRecipe