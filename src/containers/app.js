//React and redux imports
import { connect } from 'react-redux'
import React, { Component } from 'react'
import {  bindActionCreators } from 'redux'
//Components
import Header from './../components/Header'
import Loader from './../components/Loader'
import RecipesList from './../components/RecipesList'
//Actions creators
import * as loaderCreators from '../actions/loader'
import * as recipesCreators from '../actions/recipes'

const actionCreators ={
  ...loaderCreators,
  ...recipesCreators
}
class App extends Component {
  render() {
    const { props } = this
    return (
      <div className="container">
        <Header onSearchRecipes={ props.fetchRecipes }/>
        { props.isFetching && <Loader /> }

        { !!props.recipes.length && <RecipesList recipes={ props.recipes }/> }
      </div>
    )
  }
}
//Redux maping, this function map the state and return for the application as properties variable.
const mapStateToProps = (state) => { 
  return {  
    isFetching: state.loader,
    recipes: state.recipes
  } 
}
const mapDispatchToProps = (dispatch) =>{
  return bindActionCreators(actionCreators, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(App)