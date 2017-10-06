import { combineReducers } from 'redux'
import loader from './loader'
import recipes from './recipes'

const appReducers = combineReducers({
    loader,
    recipes
})

export default appReducers