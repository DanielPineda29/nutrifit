import React, { useEffect } from "react";
import { View, Text } from "react-native";
import ImageHeading from "../../components/ImageHeading";

import IMAGE from "../../assets/resource/misdatos.jpg";
import Button_lg from "../../components/Button_lg";
import { useNavigation, useRoute } from "@react-navigation/native";
import { Heading, ScrollView } from "@gluestack-ui/themed";
import RecipeCard from "../../components/recipe/RecipeCard";
import { useDispatch, useSelector } from "react-redux";
import { getFavRecipes } from "../../src/lib/Api/features/recipesSlice";
import FavRecipeCard from "../../components/favRecipes/favRecipeCard";

const FavRecipes = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const route = useRoute();
  const { recipes, recipeResponse } = useSelector((state) => state.recipe);

  const idUser = route.params?.idUser;

  console.log("idUser => ", idUser);
  console.log("recipes => ", recipes);

  useEffect(() => {
    dispatch(getFavRecipes(idUser));
  }, []);

  const handleFavRecipeInfo = () => {};

  const handleDeleteFavRecipe = () => {};

  return (
    <ScrollView>
      <View>
        <ImageHeading img={IMAGE} alt={"Datos de usuario"} />
        <Heading>Mis recetas favoritas</Heading>

        {recipes.map((item) => (
          <FavRecipeCard key={item._id} textHeading={item.strNameFood} img={item.image}/>
        ))}
      </View>
    </ScrollView>
  );
};

export default FavRecipes;
