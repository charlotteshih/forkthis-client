import React, { Component } from 'react'
import RecipeContext from '../../contexts/RecipeContext'
import { Button, Input } from '../Utils/Utils'
import './AddRecipeForm.css'

class AddRecipeForm extends Component {
	static contextType = RecipeContext

	state = {
		id: '',
		title: '',
		folder_id: '',
		ingredients: [
			{
				id: 1,
				recipe_id: '',
				quantity: '',
				unit: '',
				item: ''
			}
		],
		steps: [
			{
				id: 1,
				recipe_id: '',
				sort_order: '',
				step: ''
			}
		],
	}

	handleNameChange = e => {
		this.setState({
			id: this.context.recipes.length + 1,
			title: e.target.value.trim()
		})
	}

	handleSelectFolder = e => {
		this.setState({
			folder_id: parseInt(e.target.value)
		})
	}

	handleQtyInput = e => {
		let ing_id = parseInt(e.target.id)
		let ing_qty = e.target.value.trim()

		let newIng = this.state.ingredients.find(item => {
			return item.id === ing_id
		})
		
		newIng.quantity = ing_qty
	}

	handleUnitInput = e => {
		let ing_id = parseInt(e.target.id)
		let ing_unit = e.target.value.trim()

		let newIng = this.state.ingredients.find(item => {
			return item.id === ing_id
		})
		
		newIng.unit = ing_unit
	}

	handleIngInput = e => {
		let ing_id = parseInt(e.target.id)
		let ing_item = e.target.value.trim()

		let newIng = this.state.ingredients.find(item => {
			return item.id === ing_id
		})
		
		newIng.item = ing_item
		newIng.recipe_id = this.state.id
	}

	handleStepInput = e => {
		let step_id = parseInt(e.target.id)
		let step_item = e.target.value.trim()

		let newStep = this.state.steps.find(step => {
			return step.id === step_id
		})
		
		newStep.step = step_item
		newStep.sort_order = step_id
		newStep.recipe_id = this.state.id
	}

	addIngInput = e => {
		e.preventDefault()
		let quantity = ''
		let unit = ''
		let item = ''
		this.setState(prevState => ({
			ingredients: [
				...prevState.ingredients,
				{
					id: prevState.ingredients.length + 1,
					recipe_id: this.state.id,
					quantity,
					unit,
					item
				}
			]
		}))
	}

	addStepInput = e => {
		e.preventDefault()
		let sort_order = e.target.id
		this.setState(prevState => ({
			steps: [
				...prevState.steps,
				{
					id: prevState.steps.length + 1,
					recipe_id: this.state.id,
					sort_order,
					step: ''
				}
			]
		}))
	}

	handleSubmitRecipe = e => {
		e.preventDefault()
		let {
			id,
			title,
			folder_id,
			ingredients,
			// steps
		} = this.state
		let newRecipe = { id, title, folder_id }
		let newIngs = { ingredients }
		// let newSteps = { steps }

		// console.log('newRecipe', newRecipe)
		// console.log('newIngs', newIngs.ingredients)
		// console.log('newSteps', newSteps.steps)

		this.context.postNewRecipe(newRecipe)
		this.context.postNewIngs(newIngs.ingredients)
		// this.context.postNewSteps(newSteps.steps)

		this.clearForm()
	}

	clearForm = () => {
    this.setState({
			id: '',
			title: '',
			ingredients: [
				{
					id: 1,
					recipe_id: '',
					quantity: '',
					unit: '',
					item: ''
				}
			],
			steps: [
				{
					id: 1,
					recipe_id: '',
					sort_order: '',
					step: ''
				}
			],
			folder_id: '',
    })
  }

	render() {
		let { ingredients, steps }  = this.state
		return (
			<form
				className="add-recipe-form"
				onSubmit={this.handleSubmitRecipe}>
				<div className="name">
					<label htmlFor="name">Name: </label>
					<Input
						onChange={this.handleNameChange}
						type="text"
						id="recipe_name"
						name="recipe_name"
						required />
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
										{folder.folder_name}
									</option>
								)
							})
						}
					</select>
				</div>

				<div className="ingredients">
					<label htmlFor="ingredients">Ingredients: </label>
					<ul>
					{
						ingredients.map(ing => {
							return (
								<li key={ing.id}>
									<Input
										className="ingredient-input quantity"
										onChange={this.handleQtyInput}
										type="text"
										id={`${ing.id}`}
										name="recipe_ingredients" />
									<Input
										className="ingredient-input unit"
										onChange={this.handleUnitInput}
										type="text"
										id={`${ing.id}`}
										name="recipe_ingredients" />
									<Input
										className="ingredient-input item"
										onChange={this.handleIngInput}
										type="text"
										id={`${ing.id}`}
										name="recipe_ingredients" />
								</li>
							)
						})
					}
					</ul>
					<Button
						onClick={this.addIngInput}
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
									<textarea
										onChange={this.handleStepInput}
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

				<Button type="submit">
						Create New Recipe
				</Button>
				<Button type="reset">Clear</Button>
			</form>
		)
	}
}

export default AddRecipeForm