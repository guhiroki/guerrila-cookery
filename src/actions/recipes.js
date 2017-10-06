import * as loader from './loader'
import * as types from './types'
import API from '../api'


export const fetchRecipes = (ingredients) => {
    return (dispatch) => {
        dispatch(loader.displayLoader())

        const params = { i: ingredients}

        API.get('/', { params })
        .then((response) => {
            const recipes = response.data.results

            dispatch(setRecipes(recipes))
        })
        .catch((error) => {
            console.error(error)
            alert('deu ruim irmão, da uma olhada no console')
        })
        .then(() =>{
            dispatch(loader.hideLoader())
        })
    }
 }
export const setRecipes = (recipes) => {
    return { type: types.SET_RECIPES,
             recipes
    }
 }