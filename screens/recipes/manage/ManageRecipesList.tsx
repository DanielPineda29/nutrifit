import React, { useEffect } from "react";
import { SafeAreaView, Text } from "@gluestack-ui/themed";
import ManageRecipesCard from "../../../components/recipe/manage/ManageRecipesCard";
import { useDispatch, useSelector } from "react-redux";
import CustomButton from "../../../components/CustomButton";
import { useNavigation, useRoute } from "@react-navigation/native";
import CustomHeader from "../../../components/CustomHeader";
import ImageHeading from "../../../components/ImageHeading";
import IMAGE_REGISTER from "../../../assets/resource/iconoRegistro.jpg";
import { deleteRecipe, getRecipes, setRecipes, updateRecipe } from "../../../src/lib/Api/features/recipesSlice";

export default function ManageRecipesList() {
  const { recipes } = useSelector((state) => state.recipe);
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const route = useRoute();
  const strTime = route.params?.strTime;
  const title = route.params?.title;

  const handleAddRecipe = (strTime: string, title: string) => {
    navigation.navigate('NewRecipe',{strTime, title});
  };

  console.log('strTime listarecetas: ', strTime);

  useEffect(() => {
    const loadRecipes = async () => {
       try {
         await dispatch(getRecipes(strTime));
       } catch (error) {
         console.error("Error al cargar las recetas:", error);
       }
     };
     loadRecipes();
  }, [dispatch, strTime]);

   const handleDeleteRecipe = (idRecipe: string, strTimeParam: string) => {
     try {
        console.log('[handleDeleteRecipe] idRecipe', idRecipe);
        console.log('[handleDeleteRecipe] strTime', strTimeParam);
       dispatch(deleteRecipe(idRecipe));
       dispatch(getRecipes(strTimeParam));
     } catch (error) {
       throw new Error("Error al obtener las recetas: " + error);
     }
   };

   const handleUpdateRecipe = (idRecipe: string, title: string, strTime: string) => {
    try {
      navigation.navigate('UpdateRecipe',{idRecipe, title, strTime});
    } catch (error) {
      throw new Error("Error al actualizar la receta: " + error);
    }
   };

  return (
    <SafeAreaView>
      <ImageHeading img={IMAGE_REGISTER} alt="ManageRecipes" />
      <CustomHeader text={"Lista de " + title} />
      <CustomButton name={"Nuevo"} onClick={() => handleAddRecipe(strTime, title)} />
      {recipes && recipes.length > 0 ? (
        recipes.map((item) => (
          <ManageRecipesCard
            key={item._id}
            strNameFood={item.strNameFood}
            onPress={() => handleDeleteRecipe(item._id, item.strTime)}
            onPressUpdate={() => handleUpdateRecipe(item._id, title, strTime)}
          />
        ))
      ) : (
        <Text>Cargando recetas, espere.</Text>
      )}
    </SafeAreaView>
  );
}
