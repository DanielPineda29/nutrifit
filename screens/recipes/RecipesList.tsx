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
import axios from 'axios';

interface Recipe {
  _id: string;
  strNameFood: string;
  numKcal: number;
}

const RecipesList = () => {

  const [data, setData] = useState<Recipe[]>([]);
  const navigation = useNavigation();
  const route = useRoute();

  useEffect(() => {
    axios.get(`http://192.168.0.15:9005/api/general/recipes/${route.params.strTime}`)
    .then((response) => {
      setData(JSON.parse(response.data));
    })
    .catch((error) => {
      console.error(error);
    });
  }, []);

  return (
    <SafeAreaView>
      <ScrollView w={"full"} h={"full"}>
        <ImageHeading img={Breakfast} alt={"Encabezado desayunos"} />
        <Center>
          <Heading>Desayunos</Heading>
        </Center>
        {data.map((item) => (
          <RecipeList
          key={item._id}
          img={Breakfast}
          alt={"Nombre comida"}
          strNameFood={item.strNameFood}
          numKcal={item.numKcal}
          function={() => navigation.navigate('RecipesInfo', {_id: item._id })}
        />
        ))}
        
      </ScrollView>
    </SafeAreaView>
  );
};

export default RecipesList;
