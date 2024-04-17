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
} from "@gluestack-ui/themed";
import React from "react";
import { View } from "react-native";

const RecipeList = (props: any) => {
  return (
    <Card p="$6" borderRadius={"$lg"} maxWidth={460} m={"$3"} backgroundColor={"$green300"}>
      <HStack>
        <VStack>
          <Image size="xl" source={props.img} alt={props.alt} borderRadius="$3xl" />
        </VStack>
        <VStack>
          <Center>
            <Heading>{props.strNameFood}</Heading>
            <Text marginTop={"$2"}>{props.numKcal + " kcal"}</Text>
            <Button marginTop={"$2"} onPress={props.function}>
              <ButtonText>Ver más</ButtonText>
            </Button>
          </Center>
        </VStack>
      </HStack>
    </Card>
  );
};

export default RecipeList;
