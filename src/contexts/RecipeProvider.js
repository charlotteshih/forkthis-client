import React, { Component } from 'react'
import RecipeContext from './RecipeContext'
import config from '../config'

class RecipeProvider extends Component {
	constructor(props) {
		super(props)
		this.state = {
			folders: [],
			recipes: []
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
	}

	// this doesn't work anymore. just have each folder button go to its own route
	// filterFolders = id => {
	// 	let recipes = this.state.recipes
	// 	console.log(id)
	// 	console.log(recipes)
	// 	this.setState({
	// 		recipes: id === null
	// 		? recipes
	// 		: recipes.find(recipe => id === recipe.folder_id)
	// 	})
	// }

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

	postNewRecipe = newRecipe => {
		fetch(config.API_ENDPOINT + `/recipes`, {
			method: 'POST',
			headers: {
				'Content-Type': 'Application/json'
			},
			body: JSON.stringify({
				newRecipe,
			})
		})
			.then(response => response.json())
			.then(responseJson => this.addNewRecipe(responseJson))
			.catch()
	}

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
			postNewRecipe: this.postNewRecipe
		}
		return (
			<RecipeContext.Provider value={context}>
				{this.props.children}
			</RecipeContext.Provider>
		)
	}
}

export default RecipeProvider