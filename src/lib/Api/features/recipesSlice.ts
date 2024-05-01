import { Api, Response } from '../Api';

import {Recipe, Ingredients, Preparation} from '../../models/recipe';

interface RecipeInitialState {
    recipes: Recipe[];
    recipe: Recipe | null;
    ingredients: Ingredients[];
    preparation: Preparation[];
};

const initialState: RecipeInitialState = {
    recipes:[],
    recipe: null,
    ingredients:[],
    preparation:[],
};


//GET RECIPES =>
export const getRecipes = async (paramTime: string) => {
    try {
        const response = await Api.get(`/recipes/${paramTime}`,{headers:{'Content-Type':'application/json'}});
        console.log('API Response getRecipes: ', response.data);
        return response.data;
    } catch (error) {
        throw new Error("Error al obtener la receta" + error);
    }
};

//GET RECIPE =>
export const getRecipe = async (recipeID: string) => {
    try {
        const response = await Api.get(`/recipe/${recipeID}`,{headers:{'Content-Type':'application/json'}});
        console.log('API Response getRecipe: ', response.data);
        return response.data;
    } catch (error) {
        throw new Error("Error al obtener la receta" + error);
    }
};

//CREATE RECIPE =>
// export const createRecipe = async (recipe: Recipe) => {
//     try {
//         const response = await Api.get()
//     }
// } 