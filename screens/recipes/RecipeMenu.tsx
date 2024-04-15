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
} from "@gluestack-ui/themed";
import React from "react";
import { View, Text } from "react-native";

import Portada from "../../assets/resource/iconoRegistro.jpg";
import { ScrollView } from "@gluestack-ui/themed-native-base";
import RecipeCard from '../../components/recipe/RecipeCard';

const MiComponente = () => {
  return (
    <ScrollView w={"full"} h={"full"}>
      <VStack>
        <Center>
          <Image size="2xl" source={Portada} alt="Portada" />
        </Center>
      </VStack>
      <Center>
        <Heading>Recetario</Heading>
      </Center>
      <Center>
        <RecipeCard bgColor={"$green300"} img={Portada} textHeading={"Desayunos"} text={"Comienza tu día con un festin de delicias matutinas."} buttonText={"Ver desayunos"} />
        <RecipeCard bgColor={"$yellow300"} img={Portada} textHeading={"Comidas"} text={"Saborea la excelencia en cada bocado."} buttonText={"Ver comidas"} />
        <RecipeCard bgColor={"$primary300"} img={Portada} textHeading={"Cenas"} text={"Concluye tu día con una cena que alimenta el alma."} buttonText={"Ver cenas"} />
        <RecipeCard bgColor={"$lime300"} img={Portada} textHeading={"Colaciones"} text={"Revitaliza tu día con un refrigerio que despierta tus sentidos."} buttonText={"Ver colaciones"} />
      </Center>
    </ScrollView>
  );
};

export default MiComponente;
