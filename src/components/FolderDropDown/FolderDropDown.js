import React, { Component } from 'react'
import './FolderDropDown.css'
import RecipeContext from '../../contexts/RecipeContext'

class FolderDropDown extends Component {
	static contextType = RecipeContext

	render() {
		return (
			<select className="folder-dropdown">
				<option>Select a Folder...</option>
				{
					this.context.folders.map(folder => {
						return (
							<option
								key={folder.id}
								id={folder.id}>
								{folder.folderName}
							</option>
						)
					})
				}
			</select>
		)
	}
}

export default FolderDropDown