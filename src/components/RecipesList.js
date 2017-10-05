import React from'react'
import Recipes from './Recipes'

import '../styles/components/recipes-list.css'

const renderRecipes = (recipes) => {
    return recipes.map((recipe) => {
        return ( 
            <li key={ recipe.href }>
                <a href={ recipe.href }>
                    <Recipes { ...recipe } />
                </a>
            </li> 
        )
    })
}

const RecipesList = (props) => {
    return (
        <ul className="recipes-list">
            { renderRecipes(props.recipes) }
        </ul>
    )
}

export default RecipesList