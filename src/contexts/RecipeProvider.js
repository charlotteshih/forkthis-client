import React, { Component } from 'react'
import RecipeContext from './RecipeContext'
import folders from '../dummyData/dummyFolders'
import recipes from '../dummyData/dummyRecipes'

export default class RecipeProvider extends Component {
	constructor(props) {
		super(props)

		this.state = {
			folders,
			recipes,
			error: null,
			filterFolders: this.filterFolders,
			addNewFolder: this.addNewFolder,
			setError: this.setError,
			clearError: this.clearError,
		}
	}

	filterFolders = id => {
		this.setState({
			recipes: id === null ? recipes : recipes.filter(recipe => id === recipe.folder_id)
		})
	}

	addNewFolder = folderName => {
		const { folders } = this.state

		this.setState({
			folders: [
				...folders,
				{
					id: folders.length + 1,
					folderName: folderName
				}
			]
		})
	}

	setError = error => {
		console.error(error)
		this.setState({ error })
	}
  
	clearError = () => {
		this.setState({ error: null })
	}
  
	render() {
		return (
			<RecipeContext.Provider value={this.state}>
				{this.props.children}
			</RecipeContext.Provider>
		)
	}
}