import React, { Component } from 'react'
import RecipeContext from './RecipeContext'
import config from '../config'

class RecipeProvider extends Component {
	constructor(props) {
		super(props)
		this.state = {
			folders: [],
			recipes: [],
			// ingredients: [],
			// steps: []
		}
	}

	componentDidMount() {
		fetch(config.API_ENDPOINT + `/folders`)
			.then(response => response.json())
			.then(responseJson => {
				this.setState({
					folders: responseJson
				})
			})

		fetch(config.API_ENDPOINT + `/recipes`)
			.then(response => response.json())
			.then(responseJson => {
				this.setState({
					recipes: responseJson
				})
			})
		
		// fetch(config.API_ENDPOINT, `/ingredients`)
		// 	.then(response => response.json())
		// 	.then(responseJson => {
		// 		this.setState({
		// 			ingredients: responseJson
		// 		})
		// 	})

		// fetch(config.API_ENDPOINT, `/steps`)
		// 	.then(response => response.json())
		// 	.then(responseJson => {
		// 		this.setState({
		// 			steps: responseJson
		// 		})
		// 	})
	}

	postNewFolder = folder_name => {
		fetch(config.API_ENDPOINT + `/folders`, {
			method: 'POST',
			headers: {
				'Content-Type': 'Application/json'
			},
			body: JSON.stringify({
				folder_name
			})
		})
			.then(response => response.json())
			.then(responseJson => this.addNewFolder(responseJson))
			.catch()
	}

	addNewFolder = newFolder => {
		const folders = [ ...this.state.folders ]
		this.setState(() => ({
			folders: [
				...folders,
				newFolder
			]
		}))
	}

	postNewRecipe = ({ title, folder_id }) => {
		fetch(config.API_ENDPOINT + `/recipes`, {
			method: 'POST',
			headers: {
				'Content-Type': 'Application/json'
			},
			body: JSON.stringify({
				title,
				folder_id
			})
		})
			.then(response => response.json())
			.then(responseJson => this.addNewRecipe(responseJson))
			.catch()
	}

	postNewIngs = ({ recipe_id, quantity, unit, item }) => {
		fetch(config.API_ENDPOINT + `/ingredients`, {
			method: 'POST',
			headers: {
				'Content-Type': 'Application/json'
			},
			body: JSON.stringify({
				recipe_id,
				quantity,
				unit,
				item
			})
		})
			.then(response => response.json())
			.catch()
	}

	// postNewSteps = ({ recipe_id, sort_order, step }) => {
	// 	fetch(config.API_ENDPOINT + `/steps`, {
	// 		method: 'POST',
	// 		headers: {
	// 			'Content-Type': 'Application/json'
	// 		},
	// 		body: JSON.stringify({
	// 			recipe_id,
	// 			sort_order,
	// 			step
	// 		})
	// 	})
	// 		.then(response => response.json())
	// 		.catch()
	// }

	addNewRecipe = newRecipe => {
		const recipes = [ ...this.state.recipes ]
		this.setState(() => ({
			recipes: [
				...recipes,
				newRecipe
			]
		}))
	}
  
	render() {
		const context = {
			folders: this.state.folders,
			recipes: this.state.recipes,
			filterFolders: this.filterFolders,
			postNewFolder: this.postNewFolder,
			postNewRecipe: this.postNewRecipe,
			postNewIngs: this.postNewIngs,
			postNewSteps: this.postNewSteps
		}
		return (
			<RecipeContext.Provider value={context}>
				{this.props.children}
			</RecipeContext.Provider>
		)
	}
}

export default RecipeProvider