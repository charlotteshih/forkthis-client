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

	componentDidUpdate(prevState) {
		if(this.state.recipes !== prevState.recipes) {
			// "maximum update depth exceeded"
			console.log('what the fuck')
		}
	}

	filterFolders = id => {
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
		console.log('new recipe added!', newRecipe)
		const { recipes } = this.state
		this.setState({
			recipes: [
				...recipes,
				newRecipe
			]
		})
		console.log('recipe list', this.state.recipes)
		setTimeout(console.log('recipe list again', this.state.recipes), 5000)
		// console.log does not return updated state
		// so link to new recipe doesn't work b/c no state

		// but react devtools shows updated state????????
	}
  
	render() {
		const context = {
			folders: this.state.folders,
			recipes: this.state.recipes,
			filterFolders: this.filterFolders,
			addNewFolder: this.addNewFolder,
			postNewRecipe: this.postNewRecipe,
			setError: this.setError,
			clearError: this.clearError,
		}
		return (
			<RecipeContext.Provider value={context}>
				{this.props.children}
			</RecipeContext.Provider>
		)
	}
}