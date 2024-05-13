import {
  Card,
  HStack,
  Heading,
  Image,
  VStack,
  Text,
  Button,
  ButtonText,
  Center,
  Box
} from "@gluestack-ui/themed";
import { useRoute } from "@react-navigation/native";
import React from "react";
import { View } from "react-native";

const RecipeList = (props: any) => {

  return (
    <Card p="$6" borderRadius={"$lg"} maxWidth={460} m={"$3"} backgroundColor={"#ADD8E6"}>
      <HStack>
        <VStack>
          <Image size="xl" source={{uri: props.img}} alt={props.alt} borderRadius="$3xl" />
        </VStack>
        <VStack>
          <Box w={200}>
          <Center>
            <Heading>{props.strNameFood}</Heading>
            <Text marginTop={"$2"}>{props.numKcal + " kcal"}</Text>
            <Button marginTop={"$2"} onPress={props.function}>
              <ButtonText>Ver más</ButtonText>
            </Button>
          </Center>
          </Box>
        </VStack>
      </HStack>
    </Card>
  );
};

export default RecipeList;
