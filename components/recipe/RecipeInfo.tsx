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
import { deleteFavRecipe, getUser, postFavRecipe } from "../../src/lib/Api/features/userSlice";

const RecipeInfo = ({ recipe }: { recipe: Recipe }) => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user);
  const idUser = user._id;
  const idRecipe = recipe._id;

  const isFavorite = () => {
    return user && user.favRecipes && user.favRecipes.some((favRecipe) => favRecipe._id === recipe._id);
  };
  

  console.log('user: ', user);
  console.log('favRecipes: ', user.favRecipes);
  console.log('id recipe: ', recipe._id);

  const onPressFavorite = () => {
    if (isFavorite()) {
      console.log("idRecipe onPressFavorite: ", idRecipe);
      console.log("idUser onPressFavorite: ", idUser);
      
      dispatch(deleteFavRecipe({ idUser, idRecipe }));
      dispatch(getUser(user.strEmail));
    } else {
      dispatch(postFavRecipe({ idUser: user._id, payload: { _id: recipe._id } }));
      dispatch(getUser(user.strEmail));
    }
  };

  const favoriteIcon = isFavorite() ? "heart-fill" : "heart";
  const favoriteColor = isFavorite() ? "$red500" : "$gray500";

  return (
    <View>
      <Center>
        <VStack>
          <HStack marginBottom="$4">
            <Heading fontSize={"$3xl"}>{recipe.strNameFood}</Heading>
          </HStack>
          <HStack justifyContent="center">
            <Heading>Ingredientes</Heading>
          </HStack>
          <HStack marginBottom="$4">
            <Text
            fontSize={"$lg"}>
              {recipe.ingredients
                .map((ingredient) => ingredient.strIngredient)
                .join("\n")}
            </Text>
            
          </HStack>
          <HStack justifyContent="center">
            <Heading>Preparación</Heading>
          </HStack>
          <HStack marginBottom="$4">
            <Text fontSize={"$lg"}>
              {recipe.preparation.map((step) => step.strPreparation).join("\n")}
            </Text>
          </HStack>
          <HStack justifyContent="center" marginBottom="$4">
            <Badge >
              <BadgeText fontSize={"$xl"}>{recipe.numKcal + " kcal"}</BadgeText>
            </Badge>
          </HStack>
          <HStack justifyContent="center">
            <Button onPress={onPressFavorite} marginBottom="$3">
              <ButtonText>{isFavorite() ? "Quitar de favoritos" : "Agregar a favoritos"}</ButtonText>
            </Button>
          </HStack>
        </VStack>
      </Center>
    </View>
  );
};

export default RecipeInfo;
