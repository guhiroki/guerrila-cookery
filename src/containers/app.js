import React, { Component } from 'react'
import { connect } from 'react-redux'
import Header from './../components/Header'
import Loader from './../components/Loader'
//import RecipesList from './../components/RecipesList'
import {  bindActionCreators } from 'redux'
import * as loaderCreators from '../actions/loader'
import API from '../api'

const actionCreators ={
  ...loaderCreators
}

const ENTER_CHAR_CODE = 13

class App extends Component {
  componentDidMount ( ) {
    this.props.displayLoader()

    setTimeout(() => { this.props.hideLoader() }, 5000)
  }
//  constructor(){
//    super();
//
//    this.fetchRecipes = this.fetchRecipes.bind(this);
//    this.onSearchRecipe = this.onSearchRecipe.bind(this);
//    this.onFetchRecipesSuccess = this.onFetchRecipesSuccess.bind(this);
//  }
//  fetchRecipes(value){
//    this.setState({ isFetching: true });
//
//    const params = { i: value }; 
//
//    API.get('/',{ params })
//       .then(this.onFetchRecipesSuccess)
//       .catch(this.onFetchRecipesFailure)
//       .then(() => {this.setState({isFetching: false})});
//  }
//  onFetchRecipesSuccess(response){
//    this.setState({ recipes: response.data.results });
//  }
//  onFetchRecipesFailure(error){
//    console.error(error.message, error);
//    alert('errou ai parça doidera total');
//  }
//  onSearchRecipe (event) {
//    if(event.charCode !== ENTER_CHAR_CODE){
//      return
//    }
//    this.fetchRecipes(event.target.value);
//  }
  render() {
    const { props } = this
    return (
      <div className="container">
        <Header />
        { props.isFetching && <Loader /> }
      </div>
//              <Header onSearchRecipe= { this.onSearchRecipe }/>
//              { this.state.isFetching && <Loader /> }
//        { !this.state.isFetching && <RecipesList recipes={ this.state.recipes }/> }
    )
  }
}

const mapStateToProps = (state) => { 
  return {  
    isFetching: state.loader
  } 
}
const mapDispatchToProps = (dispatch) =>{
  return bindActionCreators(actionCreators, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(App)
