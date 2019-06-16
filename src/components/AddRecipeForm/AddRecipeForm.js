import React, { Component } from 'react'
import { Button, Input } from '../Utils/Utils'

class AddRecipeForm extends Component {
	render() {
		return (
			<form>
				<div className="title">
					<label htmlFor="title">Title: </label>
					<Input
							type="text"
							id="recipe_title"
							name="recipe_title"
							required />
				</div>

				<div className="ingredients">
					<label htmlFor="ingredients">Ingredients: </label>
					<Input
							type="text"
							id="recipe_ingredients"
							name="recipe_ingredients"
							required />
				</div>

				<div className="steps">
					<label htmlFor="steps">Steps: </label>
					<Input
							type="text"
							id="recipe_steps"
							name="recipe_steps"
							required />
				</div>

				<div className="folders">
					<label htmlFor="folders">Folder: </label>
					<Input
							type="text"
							id="recipe_folders"
							name="recipe_folders"
							required />
				</div>

				<Button type="submit">Create New Recipe</Button>
				<Button type="reset">Clear</Button>
			</form>
		)
	}
}

export default AddRecipeForm