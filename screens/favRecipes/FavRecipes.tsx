import React from 'react';
import { View, Text } from 'react-native';
import ImageHeading from '../../components/ImageHeading';

import IMAGE from '../../assets/resource/misdatos.jpg';
import Button_lg from '../../components/Button_lg';
import { useNavigation } from '@react-navigation/native';
import { Heading } from '@gluestack-ui/themed';
import RecipeCard from '../../components/recipe/RecipeCard';

const FavRecipes = () => {

    const navigation = useNavigation();

  return (
    <View>
      <ImageHeading img={IMAGE} alt={"Datos de usuario"} />
      <Heading>Mis recetas favoritas</Heading>
      {/* <RecipeCard /> */}
    </View>
  );
};

export default FavRecipes;