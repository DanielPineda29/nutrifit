import React, { useState, useEffect } from 'react';
import { VStack } from '@gluestack-ui/themed';
import ImageHeading from '../../components/ImageHeading';
import RecipeInfo from '../../components/recipe/RecipeInfo';
import Imagen from '../../assets/resource/logo.jpg';
import { useRoute } from '@react-navigation/native';
import axios from 'axios';

interface Recipe {
  _id: { $oid: string };
  strNameFood: string;
  ingredients: Ingredient[];
  preparation: Preparation[];
  numKcal: number;
}

interface Ingredient {
  _id: number;
  strIngredient: string;
}

interface Preparation {
  _id: number;
  strPreparation: string;
}

const RecipesInfo = () => {

  const route = useRoute();
  const recipeID = route.params?._id?.$oid;
  const [recipe, setRecipe] = useState(null);

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