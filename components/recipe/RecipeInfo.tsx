import {
  Center,
  HStack,
  Heading,
  VStack,
  Text,
  Badge,
  BadgeText,
  Button,
  ButtonText,
} from "@gluestack-ui/themed";
import React from "react";
import { View } from "react-native";

const RecipeInfo = (props: any) => {
  return (
    <View>
      <Center>
        <VStack>
          <HStack>
            <Heading>{props.nameFood}</Heading>
          </HStack>
          <HStack>
            <Heading>Ingredientes</Heading>
          </HStack>
          <HStack>
            <Text>{props.ingredients}</Text>
          </HStack>
          <HStack>
            <Heading>Preparación</Heading>
          </HStack>
          <HStack>
            <Text>{props.preparation}</Text>
          </HStack>
          <HStack>
            <Badge>
              <BadgeText>{props.kcal + " kcal"}</BadgeText>
            </Badge>
          </HStack>
          <HStack>
            <Button>
                <ButtonText>Agregar a favoritos</ButtonText>
            </Button>
          </HStack>
        </VStack>
      </Center>
    </View>
  );
};

export default RecipeInfo;
