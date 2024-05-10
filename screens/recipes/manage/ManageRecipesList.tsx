import React from "react";
import { SafeAreaView } from "@gluestack-ui/themed";
import ManageRecipesCard from "../../../components/recipe/manage/ManageRecipesCard";
import { useSelector } from "react-redux";
import CustomButton from "../../../components/CustomButton";
import { useNavigation, useRoute } from "@react-navigation/native";
import CustomHeader from "../../../components/CustomHeader";
import ImageHeading from "../../../components/ImageHeading";
import IMAGE_REGISTER from "../../../assets/resource/iconoRegistro.jpg";

export default function ManageRecipesList() {
  const { recipes } = useSelector((state) => state.recipe);
  const navigation = useNavigation();
  const route = useRoute();
  const time = route.params?.strTime;
  const title = route.params?.title;

  const handleAddRecipe = () => {
    navigation.navigate('NewRecipe');
  };

  return (
    <SafeAreaView>
      <ImageHeading img={IMAGE_REGISTER} alt="ManageRecipes" />
      <CustomHeader text={"Lista de " + title} />
      <CustomButton name={"Nuevo"} onClick={handleAddRecipe} />
      {recipes.map((item) => (
        <ManageRecipesCard key={item._id} strNameFood={item.strNameFood} />
      ))}
    </SafeAreaView>
  );
}
