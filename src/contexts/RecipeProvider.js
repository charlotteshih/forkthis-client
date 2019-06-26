import React, { Component } from 'react'
import RecipeContext from './RecipeContext'
import config from '../config'

import recipes from '../dummyData/dummyRecipes'

export default class RecipeProvider extends Component {
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

		this.setState({ recipes })
	}

	// componentDidUpdate(prevProps, prevState) {
	// 	if(this.state.recipes !== prevState.recipes) {
	// 		this.setState({
	// 			folders,
	// 			recipes
	// 		})
	// 		console.log('this.state', this.state)
	// 		console.log('prevState', prevState)
	// 	}
	// }

	filterFolders = id => {
		// console.log(id)
		// console.log(this.state)
		// filtering folders currently deletes added recipes
		this.setState({
			recipes: id === null
			? recipes
			: recipes.filter(recipe => id === recipe.folder_id)
		})
	}

	postNewFolder = folder_name => {
		const folders = [...this.state.folders]

		folders.push({
			id: folders.length + 1,
			folder_name
		})

		this.setState({
			folders: [
				...folders
			]
		})
	}

	postNewRecipe = newRecipe => {
		const recipes = [...this.state.recipes]
		recipes.push(newRecipe)

		this.setState(() => ({
			recipes: [
				...recipes
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