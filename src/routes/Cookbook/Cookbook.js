import React from 'react'
// import { Route } from 'react-router-dom'
import { Section } from '../../components/Utils/Utils'
import Sidebar from '../../components/Sidebar/Sidebar'
import RecipeList from '../../components/RecipeList/RecipeList'
import './Cookbook.css'

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