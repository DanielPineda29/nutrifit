import { Api, Response } from "../Api";

import { Recipe, Ingredients, Preparation } from "../../models/recipeModel";
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

interface RecipeInitialState {
  recipes: Recipe[];
  recipe: Recipe | null;
  ingredients: Ingredients[];
  preparation: Preparation[];
  recipeResponse: number | null;
}

const initialState: RecipeInitialState = {
  recipes: [],
  recipe: null,
  ingredients: [],
  preparation: [],
  recipeResponse: null,
};

export const recipeSlice = createSlice({
  name: "recipe",
  initialState: initialState,
  reducers: {
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
    },
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
    //GET FAV RECIPES =>
    builder.addCase(getFavRecipes.fulfilled, (state, action) => {
      state.recipeResponse = 200;
      state.recipes = action.payload || initialState.recipes;
    });
    builder.addCase(getFavRecipes.rejected, (state) => {
      state.recipeResponse = 400;
    });
    //GET RECIPE =>
    builder.addCase(getRecipe.fulfilled, (state, action) => {
      state.recipeResponse = 200;
      state.recipe = action.payload || initialState.recipe;
    });
    builder.addCase(getRecipe.rejected, (state) => {
      state.recipeResponse = 400;
    });
    //CREATE RECIPE =>
    builder.addCase(createRecipe.fulfilled, (state, action) => {
      state.recipeResponse = 200;
      state.recipe = action.payload || initialState.recipe;
    });
    builder.addCase(createRecipe.rejected, (state) => {
      state.recipeResponse = 400;
    });
    //UPDATE RECIPE =>
    builder.addCase(updateRecipe.fulfilled, (state, action) => {
      state.recipeResponse = 200;
      state.recipe = action.payload || initialState.recipe;
    });
    builder.addCase(updateRecipe.rejected, (state) => {
      state.recipeResponse = 400;
    });
    //UPDATE RECIPE =>
    builder.addCase(deleteRecipe.fulfilled, (state, action) => {
      state.recipeResponse = 200;
      state.recipe = action.payload || initialState.recipe;
    });
    builder.addCase(deleteRecipe.rejected, (state) => {
      state.recipeResponse = 400;
    });
  },
});

//GET RECIPES =>
export const getRecipes = createAsyncThunk(
  "recipe/getRecipes",
  async (paramTime: string) => {
    try {
      const response = await Api.get(`/recipes/${paramTime}`, {
        headers: { "Content-Type": "application/json" },
      });
      console.log("API Response getRecipes: ", response.data);
      return response.data;
    } catch (error) {
      throw new Error("Error al obtener la recetas: " + error);
    }
  }
);

//GET RECIPE =>
export const getRecipe = createAsyncThunk(
  "recipe/getRecipe",
  async (idRecipe: string) => {
    try {
      const response = await Api.get(`/recipe/${idRecipe}`, {
        headers: { "Content-Type": "application/json" },
      });
      console.log("API Response getRecipe: ", response.data);
      return response.data;
    } catch (error) {
      throw new Error("Error al obtener la receta" + error);
    }
  }
);

//GET FAV RECIPES =>
export const getFavRecipes = createAsyncThunk(
  "recipe/getFavRecipes",
  async (idUser: string) => {
    try {
      const response = await Api.get(`/favRecipes/${idUser}`, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      console.log("API Response getFavRecipes: ", response.data);
      return response.data;
    } catch (error) {
      throw new Error("Error al obtener las recetas favoritas: " + error);
    }
  }
);

//CREATE RECIPE =>
export const createRecipe = createAsyncThunk(
  "recipe/createRecipe",
  async (payload: Recipe) => {
    console.log("payload antes de enviar al servidor: ", payload);
    try {
      const response = await Api.post("/createRecipe", payload, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      console.log("API Response createRecipe: ", response.data);
      return response.data;
    } catch (error) {
      throw new Error("Error al crear la receta: " + error);
    }
  }
);

//UPDATE RECIPE =>
export const updateRecipe = createAsyncThunk(
  "recipe/updateRecipe",
  async ({
    idRecipe,
    payload: Recipe,
  }: {
    idRecipe: String;
    payload: Recipe;
  }) => {
    console.log("Recipe antes de enviar al servidor:", Recipe);
    try {
      const response = await Api.put(`/updateRecipe/${idRecipe}`, Recipe, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      console.log("API Response updateRecipe: ", response.data);
      return response.data;
    } catch (error) {
      throw new Error("Error al actualizar la receta: " + error);
    }
  }
);

//DELETE RECIPE =>
export const deleteRecipe = createAsyncThunk(
  "recipe/deleteRecipe",
  async (idRecipe: string) => {
    console.log("ID de la receta a eliminar=> ", idRecipe);
    try {
      const response = await Api.delete(`/deleteRecipe/${idRecipe}`, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      console.log("API Reponse deleteRecipe: ", response.data);
      return response.data;
    } catch (error) {
      throw new Error("Error al eliminar la receta: " + error);
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

export const { setRecipes, setRecipe, resetRecipes, resetRecipe } =
  recipeSlice.actions;
export default recipeSlice.reducer;
