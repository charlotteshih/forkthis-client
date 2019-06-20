import React, { Component } from 'react'
import RecipeContext from './RecipeContext'

import folders from '../dummyData/dummyFolders'
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
		this.setState({
			folders,
			recipes,
		})
	}

	// componentDidUpdate(prevState) {
		// if(this.state.recipes !== prevState.recipes) {
			// "maximum update depth exceeded" if i use this.setState()
			// console.log('this.state', this.state)
			// console.log('prevState', prevState)
		// }
	// }

	filterFolders = id => {
		console.log(id)
		console.log(this.state)
		// filtering folders currently deletes added recipes
		this.setState({
			recipes: id === null
			? recipes
			: recipes.filter(recipe => id === recipe.folder_id)
		})
	}

	addNewFolder = folderName => {
		const { folders } = this.state
		this.setState({
			folders: [
				...folders,
				{
					id: folders.length + 1,
					folderName
				}
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
			addNewFolder: this.addNewFolder,
			postNewRecipe: this.postNewRecipe
		}
		return (
			<RecipeContext.Provider value={context}>
				{this.props.children}
			</RecipeContext.Provider>
		)
	}
}