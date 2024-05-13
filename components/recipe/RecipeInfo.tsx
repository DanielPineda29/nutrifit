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
  Icon,
} from "@gluestack-ui/themed";
import React from "react";
import { View } from "react-native";
import { Recipe } from "../../src/lib/models/recipeModel";
import { useDispatch, useSelector } from "react-redux";
// import { AddIcon } from "@gluestack-ui/icons";

const RecipeInfo = ({ recipe }: { recipe: Recipe }) => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user);

  const isFavorite = () => {
    // Verificar si la receta actual es favorita para el usuario
    return user.favRecipes.some((favRecipe) => favRecipe._id === recipe._id);
  };

  const onPressFavorite = () => {
    // Lógica para manejar la acción de agregar/quitar una receta de favoritos
    // Aquí debes llamar a una función para agregar/quitar la receta de favoritos
  };

  const favoriteIcon = isFavorite() ? "heart-fill" : "heart";
  const favoriteColor = isFavorite() ? "$red500" : "$gray500";

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
            <Text>
              {recipe.ingredients
                .map((ingredient) => ingredient.strIngredient)
                .join("\n")}
            </Text>
          </HStack>
          <HStack>
            <Heading>Preparación</Heading>
          </HStack>
          <HStack>
            <Text>
              {recipe.preparation.map((step) => step.strPreparation).join("\n")}
            </Text>
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
            {/* <Button onPress={onPressFavorite}>
              <Icon as={AddIcon} m="$2" w="$4" h="$4" />
            </Button> */}
          </HStack>
        </VStack>
      </Center>
    </View>
  );
};

export default RecipeInfo;
