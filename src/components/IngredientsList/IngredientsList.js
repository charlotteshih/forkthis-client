import React, { Component } from 'react'
import recipes from '../../dummyData/dummyRecipes'

class FoldersList extends Component {
  state = {
    recipes
  }

  render() {
    return (
      <ul>
        {
          this.state.recipes[0].ingredients.map(ing => {
            return (
              <li className="folder-item">
                {ing}
              </li>
            )
          })
        }
      </ul>
    )
  }
}

export default FoldersList