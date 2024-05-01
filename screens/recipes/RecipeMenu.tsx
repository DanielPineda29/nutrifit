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

import Portada from "../../assets/resource/iconoRegistro.jpg";
import { ScrollView } from "@gluestack-ui/themed-native-base";
import RecipeCard from "../../components/recipe/RecipeCard";
import ImageHeading from "../../components/ImageHeading";
import { useNavigation } from "@react-navigation/native";

const MiComponente = () => {

  const navigation = useNavigation();

  const handleScreenList = (strTime: string, title: string) => {
    navigation.navigate("RecipesList", {strTime, title});
  }
  

  // 'RecipesList', {strTime: 'Breakfast'}

  return (
    <SafeAreaView>
      <ScrollView w={"full"} h={"full"}>
        <ImageHeading img={Portada} alt={"Encabezado recetas"} />
        <VStack>
          {/* <Center>
          <Image size="2xl" source={Portada} alt="Portada" />
        </Center> */}
        </VStack>
        <Center>
          <Heading>Recetario</Heading>
        </Center>
        <Center>
          <RecipeCard
            bgColor={"$green300"}
            img={Portada}
            textHeading={"Desayunos"}
            text={"Comienza tu día con un festin de delicias matutinas."}
            buttonText={"Ver desayunos"}
            onClick={() => handleScreenList("Breakfast", "Desayunos")}
          />
          <RecipeCard
            bgColor={"$yellow300"}
            img={Portada}
            textHeading={"Comidas"}
            text={"Saborea la excelencia en cada bocado."}
            buttonText={"Ver comidas"}
            onClick={() => handleScreenList("Meals", "Comidas")}
          />
          <RecipeCard
            bgColor={"$primary300"}
            img={Portada}
            textHeading={"Cenas"}
            text={"Concluye tu día con una cena que alimenta el alma."}
            buttonText={"Ver cenas"}
            onClick={() => handleScreenList("Dinner", "Cenas")}
          />
          <RecipeCard
            bgColor={"$lime300"}
            img={Portada}
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
  );
};

export default MiComponente;
