import {
  Center,
  Heading,
  SafeAreaView,
  ScrollView,
} from "@gluestack-ui/themed";
import React from "react";
import { View, Text } from "react-native";
import RecipeList from "../../components/recipe/RecipeList";
import ImageHeading from "../../components/ImageHeading";

import Breakfast from "../../assets/resource/logo.jpg";
import { useNavigation, useRoute } from "@react-navigation/native";

import { useEffect, useState } from "react";
import axios from "axios";
import { getRecipes } from "../../src/lib/Api/features/recipesSlice";
import { Recipe } from "../../src/lib/models/recipeModel";

const RecipesList = () => {
  const [recipes, setRecipes] = useState<Recipe[]>([]);
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

  useEffect(() => {
    const fetchData = async () => {
      try {
        const recipesData = await getRecipes(strTime);
        setRecipes(recipesData);
      } catch (error) {
        console.error("Error response recipes: ", error);
      }
    };
    fetchData();
  }, [strTime]);


  console.info('RECIPES:> ', recipes);
  return (
    <SafeAreaView>
      <ScrollView w={"$full"} h={"$full"}>
        <ImageHeading img={Breakfast} alt={"Encabezado desayunos"} />
        <Center>
          <Heading>{title}</Heading>
        </Center>
        {recipes.map((item) => (
          <RecipeList
            key={item._id}
            img={Breakfast}
            alt={"Nombre comida"}
            strNameFood={item.strNameFood}
            numKcal={item.numKcal}
            function={() =>
              navigation.navigate("RecipesInfo", { recipeID: item._id })
            }
          />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default RecipesList;
