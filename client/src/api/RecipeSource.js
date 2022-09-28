import axios from 'axios'

export const RecipeSource = axios.create({
    baseURL: 'https://api.spoonacular.com/',
})