import React, { useState, useEffect } from 'react';
import { VStack } from '@gluestack-ui/themed';
import ImageHeading from '../../components/ImageHeading';
import RecipeInfo from '../../components/recipe/RecipeInfo';
import Imagen from '../../assets/resource/logo.jpg';
import { useRoute } from '@react-navigation/native';
import axios from 'axios';
import { getRecipe } from '../../src/lib/Api/features/recipesSlice';
import { Recipe } from '../../src/lib/models/recipeModel';

const RecipesInfo = () => {

  const route = useRoute();
  const recipeID = route.params?.recipeID;
  const [recipe, setRecipe] = useState<Recipe | undefined>(undefined);

  /*
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://192.168.0.15:9005/api/general/recipe/${recipeID}`);
        setRecipe(response.data[0]);
        console.log('recipe:', response.data[0]);
      } catch (error) {
        console.error('Error fetching recipe:', error);
      }
    };
  
    fetchData();
  }, [recipeID]);
  */

  useEffect(() => {
    const fetchData = async () => {
      try{
        const recipeData = await getRecipe(recipeID); 
        setRecipe(recipeData);
      } catch (error) {
        console.error("Error en obtener la receta: ", error);
      }
    };
    fetchData();
  },[recipeID]);

  return (
    <VStack>
      <ImageHeading img={Imagen} alt={"Imagen"} />
      {recipe && (
        <RecipeInfo
          recipe={recipe}
        />
      )}
    </VStack>
  );
};

export default RecipesInfo;