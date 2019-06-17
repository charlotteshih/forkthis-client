import React, { Component } from 'react'
import { Button, Input } from '../Utils/Utils'
import RecipeContext from '../../contexts/RecipeContext'
import FolderDropDown from '../FolderDropDown/FolderDropDown'
import './AddRecipeForm.css'

class AddRecipeForm extends Component {
	static contextType = RecipeContext

	state = {
		title: '',
		ingredients: [],
		steps: [],
		folder_id: null
	}

	handleTitleChange = e => {
		this.setState({
			title: e.target.value.trim()
		})
	}

	addIngredientInput = e => {
		e.preventDefault()
		this.setState((prevState) => ({
			ingredients: [
				...prevState.ingredients,
				{
					id: prevState.ingredients.length,
					item: ''
				}
			]
		}))
	}

	addStepInput = e => {
		e.preventDefault()
		this.setState((prevState) => ({
			steps: [
				...prevState.steps,
				{
					id: prevState.steps.length,
					step: ''
				}
			]
		}))
	}

	render() {
		let { ingredients, steps } = this.state

		return (
			<form className="add-recipe-form">
				<div className="title">
					<label htmlFor="title">Title: </label>
					<Input
						onChange={this.handleTitleChange}
						type="text"
						id="recipe_title"
						name="recipe_title"
						required />
				</div>

				<div className="ingredients">
					<label htmlFor="ingredients">Ingredients: </label>
					<Input
						type="text"
						key="1"
						id="recipe_ingredients"
						name="recipe_ingredients"
						required />
					<Input
						type="text"
						key="2"
						id="recipe_ingredients"
						name="recipe_ingredients" />
					<Input
						type="text"
						key="3"
						id="recipe_ingredients"
						name="recipe_ingredients" />
					<Input
						type="text"
						key="4"
						id="recipe_ingredients"
						name="recipe_ingredients" />
					{
						ingredients.map(ing => {
							return (
								<Input
									type="text"
									key={ing.id + 5}
									id="recipe_ingredients"
									name="recipe_ingredients" />
							)
						})
					}
					<Button
						onClick={this.addIngredientInput}
						className="add-ingredient-button">
						+ Add Ingredient
					</Button>
				</div>

				<div className="steps">
					<label htmlFor="steps">Steps: </label>
					<Input
						type="text"
						key="1"
						id="recipe_steps"
						name="recipe_steps"
						required />
					<Input
						type="text"
						key="2"
						id="recipe_steps"
						name="recipe_steps" />
					<Input
						type="text"
						key="3"
						id="recipe_steps"
						name="recipe_steps" />
					<Input
						type="text"
						key="4"
						id="recipe_steps"
						name="recipe_steps" />
					{
						steps.map(step => {
							return (
								<Input
									type="text"
									key={step.id + 5}
									id="recipe_steps"
									name="recipe_steps" />
							)
						})
					}
					<Button
						onClick={this.addStepInput}
						className="add-step-button">
						+ Add Step
					</Button>
				</div>

				<div className="folders">
					<label htmlFor="folders">Folder: </label>
					<FolderDropDown />
				</div>

				<Button type="submit">Create New Recipe</Button>
				<Button type="reset">Clear</Button>
			</form>
		)
	}
}

export default AddRecipeForm