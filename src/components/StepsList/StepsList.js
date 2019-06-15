import React, { Component } from 'react'
import recipes from '../../dummyData/dummyRecipes'

class FoldersList extends Component {
  state = {
    recipes
  }

  render() {
    return (
      <ol>
        {
          this.state.recipes[0].steps.map(step => {
            return (
              <li className="folder-item">
                {step}
              </li>
            )
          })
        }
      </ol>
    )
  }
}

export default FoldersList