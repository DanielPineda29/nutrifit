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
import { useNavigation } from "@react-navigation/native";

const RecipesList = () => {

const navigation = useNavigation();

  return (
    <SafeAreaView>
      <ScrollView w={"full"} h={"full"}>
        <ImageHeading img={Breakfast} alt={"Encabezado desayunos"} />
        <Center>
          <Heading>Desayunos</Heading>
        </Center>
        <RecipeList
          img={Breakfast}
          alt={"Nombre comida"}
          nameFood={"Sandwich Montecristo"}
          kcal={295}
          function={() => navigation.navigate('RecipesInfo')}
        />
        <RecipeList
          img={Breakfast}
          alt={"Nombre comida"}
          nameFood={"Sandwich Montecristo"}
          kcal={295}
        />
        <RecipeList
          img={Breakfast}
          alt={"Nombre comida"}
          nameFood={"Sandwich Montecristo"}
          kcal={295}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default RecipesList;
