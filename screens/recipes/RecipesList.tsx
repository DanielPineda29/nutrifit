import {
  Center,
  Heading,
  SafeAreaView,
  ScrollView,
  Box
} from "@gluestack-ui/themed";
import React from "react";
import { View, Text } from "react-native";
import RecipeList from "../../components/recipe/RecipeList";
import ImageHeading from "../../components/ImageHeading";

import Breakfast from "../../assets/resource/general2.jpg";
import { useNavigation, useRoute } from "@react-navigation/native";

import { useEffect, useState } from "react";
import axios from "axios";
import { getRecipe, getRecipes, setRecipe, setRecipes } from "../../src/lib/Api/features/recipesSlice";
import { Recipe } from "../../src/lib/models/recipeModel";
import { useDispatch, useSelector } from "react-redux";

const RecipesList = () => {
  //const [recipes, setRecipes] = useState<Recipe[]>([]);
  const dispatch = useDispatch();
  const {recipes} = useSelector(state => state.recipe);
  const navigation = useNavigation();
  const route = useRoute();
  const strTime = route.params?.strTime;
  const title = route.params?.title;

  console.info("ROUTE: ", strTime);

  /*
  useEffect(() => {
    axios.get(`http://192.168.0.15:9005/api/general/recipes/${route.params.strTime}`)
    .then((response) => {
      setData(JSON.parse(response.data));
    })
    .catch((error) => {
      console.error(error);
    });
  }, []);
  */

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const recipesData = await dispatch(getRecipes(strTime));
  //       dispatch(setRecipes(recipesData.payload));
  //     } catch (error) {
  //       console.error("Error response recipes: ", error);
  //     }
  //   };
  //   fetchData();
  // }, [strTime]);

  const handleRecipe = async (idRecipe: string) => {
    try {
      const recipeData = await dispatch(getRecipe(idRecipe));
      dispatch(setRecipe(recipeData.payload));
      navigation.navigate("RecipesInfo");
    } catch (error) {
      throw new Error("Error al obtener la receta: " + error);
    }
  };


  console.info('RECIPES:> ', recipes);
  return (
    <SafeAreaView>
      <ScrollView w={"$full"} h={"$full"}>
        <ImageHeading img={Breakfast} alt={"Encabezado desayunos"} />
        
        <Center>
          <Heading size="3xl" fontSize={"$4xl"} >{title}</Heading>
        </Center>
        
        {recipes.map((item) => (
          <Box  w={390}>
          <RecipeList
              key={item._id}
              img={item.image}
              alt={"Nombre comida"}
              strNameFood={item.strNameFood}
              numKcal={item.numKcal}
              function={
                // navigation.navigate("RecipesInfo", { recipeID: item._id })
                () => handleRecipe(item._id)
              }
            />
          </Box>
          
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default RecipesList;
