import React, { useState, useEffect } from 'react';
import { ScrollView, VStack } from '@gluestack-ui/themed';
import ImageHeading from '../../components/ImageHeading';
import RecipeInfo from '../../components/recipe/RecipeInfo';
import Imagen from '../../assets/resource/logo.jpg';
import { useNavigation, useRoute } from '@react-navigation/native';
import axios from 'axios';
import { getRecipe, resetRecipe } from '../../src/lib/Api/features/recipesSlice';
import { Recipe } from '../../src/lib/models/recipeModel';
import { useDispatch, useSelector } from 'react-redux';
import Button_lg from '../../components/Button_lg';

const RecipesInfo = () => {

  const route = useRoute();
  const navigation = useNavigation();

  const {recipe} = useSelector(state => state.recipe);
  const dispatch = useDispatch();

  const handleReturn = async () => {
    dispatch(resetRecipe());
    navigation.navigate('RecipesList');
  };

  return (
    <ScrollView> 
      <VStack>
      <ImageHeading img={Imagen} alt={"Imagen"} />
      {recipe && (
        <RecipeInfo
          key={recipe._id}
          recipe={recipe}
        />
      )}
      <Button_lg name="Regresar" function={handleReturn} />
    </VStack>
    </ScrollView>
  );
};

export default RecipesInfo;