import {
  Heading,
  Image,
  Box,
  Card,
  Link,
  HStack,
  LinkText,
  Icon,
  VStack,
  Center,
  Button,
  ButtonText,
  SafeAreaView,
} from "@gluestack-ui/themed";
import React from "react";
import { View, Text } from "react-native";

import Portada from "../../assets/resource/Recetario.jpg";
import Desayuno from "../../assets/resource/Desayuno.jpg";
import Comida from "../../assets/resource/Comida.jpg";
import Cena from "../../assets/resource/Cena.png";
import Colacion from "../../assets/resource/Colacion.jpg";
import { ScrollView } from "@gluestack-ui/themed-native-base";
import RecipeCard from "../../components/recipe/RecipeCard";
import ImageHeading from "../../components/ImageHeading";
import { useNavigation } from "@react-navigation/native";
import { useDispatch } from "react-redux";
import { getRecipes, setRecipes } from "../../src/lib/Api/features/recipesSlice";

const MiComponente = () => {

  const navigation = useNavigation();
  const dispatch = useDispatch();


  const handleScreenList = async (strTime: string, title: string) => {
    try{
      const recipesData = await dispatch(getRecipes(strTime));
        dispatch(setRecipes(recipesData.payload));
        navigation.navigate("RecipesList", {strTime, title});
    } catch (error) {
      throw new Error("Error al obtener las recetas: " + error);
    }
  }

  // const handleGetRecipes = async () => {
  //   try{
  //     const recipesData = await dispatch(getRecipes(strTime));
  //       dispatch(setRecipes(recipesData.payload));
  //       navigation.navigate("RecipesList", {strTime, title});
  //   } catch (error) {
  //     throw new Error("Error al obtener las recetas: ", error);
  //   }
  // };  
  

  // 'RecipesList', {strTime: 'Breakfast'}

  return (
    <Box bgColor="#FFFAFA">
    <SafeAreaView>
      <ScrollView w={"full"} h={"full"}>
        <ImageHeading img={Portada} alt={"Encabezado recetas"} />
        <VStack>
          {/* <Center>
          <Image size="2xl" source={Portada} alt="Portada" />
        </Center> */}
        </VStack>
        <Center>
          <Heading>RECETARIO</Heading>
        </Center>
        <Center>
          <RecipeCard
            bgColor={"#ADD8E6"}
            img={Desayuno}
            textHeading={"Desayunos"}
            text={"Comienza tu día con un festin de delicias matutinas."}
            buttonText={"Ver desayunos"}
            onClick={() => handleScreenList("Breakfast", "Desayunos")}
          />
          <RecipeCard
            bgColor={"#ADD8E6"}
            img={Comida}
            textHeading={"Comidas"}
            text={"Saborea la excelencia en cada bocado."}
            buttonText={"Ver comidas"}
            onClick={() => handleScreenList("Meals", "Comidas")}
          />
          <RecipeCard
            bgColor={"#ADD8E6"}
            img={Cena}
            textHeading={"Cenas"}
            text={"Concluye tu día con una cena que alimenta el alma."}
            buttonText={"Ver cenas"}
            onClick={() => handleScreenList("Dinner", "Cenas")}
          />
          <RecipeCard
            bgColor={"#ADD8E6"}
            img={Colacion}
            textHeading={"Colaciones"}
            text={
              "Revitaliza tu día con un refrigerio que despierta tus sentidos."
            }
            buttonText={"Ver colaciones"}
            onClick={() => handleScreenList("Collation", "Colaciones")}
          />
        </Center>
      </ScrollView>
    </SafeAreaView>
    </Box>
  );
};

export default MiComponente;
