import React, { Component } from 'react'
import { connect } from 'react-redux'
import Header from './../components/Header'
import Loader from './../components/Loader'
import RecipesList from './../components/RecipesList'
import {  bindActionCreators } from 'redux'
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
