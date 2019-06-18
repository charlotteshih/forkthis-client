import React, { Component } from 'react'
import RecipeContext from '../../contexts/RecipeContext'
import { Button, Input } from '../Utils/Utils'
import './AddRecipeForm.css'

class AddRecipeForm extends Component {
	static contextType = RecipeContext

	state = {
		title: '',
		ingredients: [
			{
				id: 1,
				item: ''
			},
			{
				id: 2,
				item: ''
			},
			{
				id: 3,
				item: ''
			}
		],
		steps: [
			{
				id: 1,
				step: ''
			},
			{
				id: 2,
				step: ''
			},
			{
				id: 3,
				step: ''
			}
		],
		folder_id: '',
	}

	handleTitleChange = e => {
		this.setState({
			title: e.target.value.trim()
		})
	}

	handleSelectFolder = e => {
		this.setState({
			folder_id: e.target.value
		})
	}

	handleIngredientInput = e => {
		let ing_id = e.target.id
		let ing_item = e.target.value

		let newIng = this.state.ingredients.find(item => {
			return item.id === parseInt(ing_id)
		})
		
		newIng.item = ing_item
	}

	handleStepInput = e => {
		let step_id = e.target.id
		let step_item = e.target.value

		let newStep = this.state.steps.find(step => {
			return step.id === parseInt(step_id)
		})
		
		newStep.step = step_item
	}

	addIngredientInput = e => {
		e.preventDefault()
		this.setState(prevState => ({
			ingredients: [
				...prevState.ingredients,
				{
					id: prevState.ingredients.length + 1,
					item: ''
				}
			]
		}))
	}

	addStepInput = e => {
		e.preventDefault()
		this.setState(prevState => ({
			steps: [
				...prevState.steps,
				{
					id: prevState.steps.length + 1,
					step: ''
				}
			]
		}))
	}

	clearForm = () => {
    this.setState({
			title: '',
			ingredients: [
				{
					id: 1,
					item: ''
				},
				{
					id: 2,
					item: ''
				},
				{
					id: 3,
					item: ''
				}
			],
			steps: [
				{
					id: 1,
					step: ''
				},
				{
					id: 2,
					step: ''
				},
				{
					id: 3,
					step: ''
				}
			],
			folder_id: '',
    })
  }

	handleSubmitRecipe = e => {
		e.preventDefault()
		// console.log(this.state)
		this.clearForm()
	}

	render() {
		let { ingredients, steps } = this.state

		return (
			<form
				className="add-recipe-form"
				onSubmit={this.handleSubmitRecipe}>
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
					<ul>
					{
						ingredients.map(ing => {
							return (
								<li key={ing.id}>
									<Input
										onChange={this.handleIngredientInput}
										type="text"
										id={`${ing.id}`}
										name="recipe_ingredients" />
								</li>
							)
						})
					}
					</ul>
					<Button
						onClick={this.addIngredientInput}
						className="add-ingredient-button">
						+ Add Ingredient
					</Button>
				</div>

				<div className="steps">
					<label htmlFor="steps">Steps: </label>
					<ol>
					{
						steps.map(step => {
							return (
								<li key={step.id}>
									<Input
										onChange={this.handleStepInput}
										type="text"
										id={`${step.id}`}
										name="recipe_steps" />
								</li>
							)
						})
					}
					</ol>
					<Button
						onClick={this.addStepInput}
						className="add-step-button">
						+ Add Step
					</Button>
				</div>

				<div className="folders">
					<label htmlFor="folders">Folder: </label>
					<select className="folder-dropdown" onChange={this.handleSelectFolder}>
						<option>Please Select a Folder...</option>
						{
							this.context.folders.map(folder => {
								return (
									<option
										key={folder.id}
										value={`${folder.id}`}>
										{folder.folderName}
									</option>
								)
							})
						}
					</select>
				</div>

				<Button type="submit">
						Create New Recipe
				</Button>
				<Button type="reset">Clear</Button>
			</form>
		)
	}
}

export default AddRecipeForm