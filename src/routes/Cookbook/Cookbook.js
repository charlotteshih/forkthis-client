import React from 'react'
import { Section } from '../../components/Utils/Utils'
import './Cookbook.css'

import Sidebar from '../../components/Sidebar/Sidebar'
import RecipeList from '../../components/RecipeList/RecipeList'

function Cookbook() {
  return (
    <>
      <h2>Your Cookbook</h2>
      <Section className="cookbook">
        <Sidebar />
        <RecipeList />
      </Section>
    </>
  )
}

export default Cookbook