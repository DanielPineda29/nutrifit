import React from "react";
import { SafeAreaView } from "@gluestack-ui/themed";
import ManageRecipesCard from "../../../components/recipe/manage/ManageRecipesCard";
import { useSelector } from "react-redux";

export default function ManageRecipesList() {
  const { recipes } = useSelector((state) => state.recipe);

  return (
    <SafeAreaView>
      {recipes.map((item) => (
        <ManageRecipesCard key={item._id} strNameFood={item.strNameFood} />
      ))}
    </SafeAreaView>
  );
}
