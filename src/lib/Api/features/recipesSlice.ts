import { Api, Response } from '../Api';

import {Recipe, Ingredients, Preparation} from '../../models/recipeModel';
import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';

interface RecipeInitialState {
    recipes: Recipe[];
    recipe: Recipe | null;
    ingredients: Ingredients[];
    preparation: Preparation[];
    recipeResponse: number | null;
};

const initialState: RecipeInitialState = {
    recipes:[],
    recipe: null,
    ingredients:[],
    preparation:[],
    recipeResponse: null,
};

export const recipeSlice = createSlice({
    name:'recipe',
    initialState: initialState,
    reducers:{
        setRecipe: (state, action: PayloadAction<Recipe | null>) => {
            state.recipe = action.payload;
        },
        setRecipes: (state, action: PayloadAction<Recipe[] | []>) => {
            state.recipes = action.payload;
        },
        resetRecipes: (state) => {
            state.recipes = [];
        },
        resetRecipe: (state) => {
            state.recipe = null;
        }
    },
    extraReducers: (builder) => {
        //GET RECIPES => 
        builder.addCase(getRecipes.fulfilled, (state, action) => {
            state.recipeResponse = 200;
            state.recipes = action.payload || initialState.recipes;
        });
        builder.addCase(getRecipes.rejected, (state) => {
            state.recipeResponse = 400;
        });
    },
});

//GET RECIPES => 
export const getRecipes = createAsyncThunk(
    'recipe/getRecipes',
    async (paramTime: string) => {
        try {
            const response = await Api.get(`/recipes/${paramTime}`,{
                headers: {'Content-Type':'application/json'}
            });
            console.log('API Response getRecipes: ', response.data);
            return response.data
        } catch (error) {
            throw new Error("Error al obtener la recetas: " + error);
        }
    }
);


//GET RECIPE =>
export const getRecipe = createAsyncThunk(
    'recipe/getRecipe',
    async (idRecipe: string) => {
        try {
            const response = await Api.get(`/recipe/${idRecipe}`,{headers:{'Content-Type':'application/json'}});
            console.log('API Response getRecipe: ', response.data);
            return response.data;
        } catch (error) {
            throw new Error("Error al obtener la receta" + error);
        }
    }
);

//CREATE RECIPE =>
export const createRecipe = createAsyncThunk(
    'recipe/createRecipe',
    async (idRecipe: string) => {
        try {
            const response = await Api.post(`/createRecipe/${idRecipe}`,{
                headers: {
                    'Content-Type':'application/json'
                }
            });
            console.log('API Response createRecipe: ', response.data);
            return response.data;
        } catch (error) {
            throw new Error("Error al crear la receta: " + error);
        }
    }
);

//GET RECIPES =>
// export const getRecipes = async (paramTime: string) => {
//     try {
//         const response = await Api.get(`/recipes/${paramTime}`,{headers:{'Content-Type':'application/json'}});
//         console.log('API Response getRecipes: ', response.data);
//         return response.data;
//     } catch (error) {
//         throw new Error("Error al obtener la receta" + error);
//     }
// };

//GET RECIPE =>
// export const getRecipe = async (idRecipe: string) => {
//     try {
//         const response = await Api.get(`/recipe/${idRecipe}`,{headers:{'Content-Type':'application/json'}});
//         console.log('API Response getRecipe: ', response.data);
//         return response.data;
//     } catch (error) {
//         throw new Error("Error al obtener la receta" + error);
//     }
// };

//CREATE RECIPE =>
// export const createRecipe = async (recipe: Recipe) => {
//     try {
//         const response = await Api.get()
//     }
// } 

export const { setRecipes, setRecipe, resetRecipes, resetRecipe  } = recipeSlice.actions;
export default recipeSlice.reducer;