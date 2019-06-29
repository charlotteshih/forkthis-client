import React, { Component } from 'react'
import RecipeContext from '../../contexts/RecipeContext'
import { Button, Input, Section } from '../Utils/Utils'
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
		titleValid: false,
		titleValidation: '',
		folderValid: false,
		folderValidation: '',
		formPosted: false,
		successMessage: ''
	}

	handleNameChange = e => {
		let titleInput = e.target.value.trim()
		this.setState({
			id: this.context.recipes.length + 1,
			title: titleInput
		}, this.validateTitle(titleInput))
	}

	handleSelectFolder = e => {
		let folderInput = parseInt(e.target.value)
		this.setState({
			folder_id: folderInput
		}, this.validateFolder(folderInput))
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
		let { id, title, folder_id, ingredients, steps } = this.state
		
		let newRecipe = { id, title, folder_id }
		let newIngs = ingredients
		let newSteps = steps

		this.context.postNewRecipe(newRecipe)
		this.context.postNewIngs(newIngs)
		this.context.postNewSteps(newSteps)

		this.setState({
			formPosted: true,
			successMessage: `Hooray! Your recipe has been created..`
		})
	}

	validateTitle = title => {
		let validation = this.state.titleValidation
		let hasError = false

		if (title.length === 0) {
			hasError = true
			validation = 'Title cannot be blank.'
		} else {
			validation = ''
		}

		this.setState({
			titleValid: !hasError,
			titleValidation: validation
		}, this.titleValid(title))
	}

	titleValid = title => {
		if (this.state.title) {
			this.setState({
				title: title
			})
		}
	}

	validateFolder = folder_id => {
		let validation = this.state.folderValidation
		let hasError = false
		
		if(validation === 0) {
			hasError = true
			validation = 'Please select a folder.'
		} else {
			validation = ''
		}

		this.setState({
			folderValid: !hasError,
			folderValidation: validation
		}, this.folderValid(folder_id))
	}

	folderValid = folder_id => {
		if (this.state.folder_id) {
			this.setState({
				folder_id: folder_id
			})
		}
	}

	render() {
		let { ingredients, steps }  = this.state
		return (
			<>
				<form
					className="add-recipe-form"
					onSubmit={this.handleSubmitRecipe}>
					<div className="name">
						<label htmlFor="name">Name: </label>
						<Input
							className="ingredient-input"
							onChange={this.handleNameChange}
							type="text"
							id="recipe_name"
							name="recipe_name"
							placeholder="i.e. Award-Winning 5-Alarm Chili"
							required />
					</div>

					<div className="folders">
						<label htmlFor="folders">Folder: </label>
						<select className="folder-dropdown" onChange={this.handleSelectFolder} required>
							<option value="">Please Select a Folder...</option>
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
							{ingredients.map(ing => {
								return (
									<li key={ing.id}>
										<Input
											className="ingredient-input quantity"
											onChange={this.handleQtyInput}
											type="text"
											id={`${ing.id}`}
											placeholder="Quantity"
											name="recipe_ingredients" />
										<Input
											className="ingredient-input unit"
											onChange={this.handleUnitInput}
											type="text"
											id={`${ing.id}`}
											placeholder="Unit"
											name="recipe_ingredients" />
										<Input
											className="ingredient-input item"
											onChange={this.handleIngInput}
											type="text"
											id={`${ing.id}`}
											placeholder="Item"
											name="recipe_ingredients" />
									</li>
								)
							})}
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
											placeholder="1. Make food. 2. Eat food."
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

					<Button
						type="submit"
						disabled={!this.state.titleValid}>
							Create New Recipe
					</Button>
					<Button type="reset">Clear</Button>
				</form>

				<Section className="error-box">
					{this.state.titleValidation}
					{this.state.ingValidation}
					{this.state.stepValidation}
				</Section>
				<Section className="form-posted">
					{this.state.successMessage}
				</Section>
			</>
		)
	}
}

export default AddRecipeForm