import { Api, Response } from '../Api';

import {Recipe, Ingredients, Preparation} from '../../models/recipeModel';

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


//CHECK USER =>
export const checkEmailExists = async (strEmail: string, strPassword: string) => {
    try {
        console.log('checkEmailExists strEmail: ', strEmail)
        const response = await Api.post('/user/check_email',{strEmail, strPassword},{headers:{'Content-Type':'application/json'}});
        console.log('API Response checkEmailExists: ', response.data);
        return response.data.exists;
    } catch (error) {
        throw new Error("Error al obtener la receta" + error);
    }
};

//GET USER =>
export const getUser = async (strEmail: string) => {
    try {
        const response = await Api.get(`/user/${strEmail}`,{headers:{'Content-Type':'application/json'}});
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