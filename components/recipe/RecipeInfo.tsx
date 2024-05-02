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
import { Recipe } from "../../src/lib/models/recipeModel";


const RecipeInfo = ({ recipe }: { recipe: Recipe }) => {
  return (
    <View>
      <Center>
        <VStack>
          <HStack>
            <Heading>{recipe.strNameFood}</Heading>
          </HStack>
          <HStack>
            <Heading>Ingredientes</Heading>
          </HStack>
          <HStack>
            <Text>{recipe.ingredients.map(ingredient => ingredient.strIngredient).join('\n')}</Text>
          </HStack>
          <HStack>
            <Heading>Preparación</Heading>
          </HStack>
          <HStack>
            <Text>{recipe.preparation.map(step => step.strPreparation).join('\n')}</Text>
          </HStack>
          <HStack>
            <Badge>
              <BadgeText>{recipe.numKcal + " kcal"}</BadgeText>
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
