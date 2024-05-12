import React, { useState } from "react";
import { SafeAreaView, ScrollView } from "@gluestack-ui/themed";
import ImageHeading from "../../../components/ImageHeading";
import IMAGE_REGISTER from "../../../assets/resource/iconoRegistro.jpg";
import CustomHeader from "../../../components/CustomHeader";
import CustomInput from "../../../components/CustomInput";
import CustomButton from "../../../components/CustomButton";
import { useDispatch } from "react-redux";
import { useNavigation, useRoute } from "@react-navigation/native";
import { createRecipe } from "../../../src/lib/Api/features/recipesSlice";

export default function NewRecipe() {
  const [strNameFood, setStrNameFood] = useState("");
  const [numKcal, setNumKcal] = useState("");
  const [ingredients, setIngredients] = useState<string[]>([]);
  const [preparation, setPreparation] = useState<string[]>([]);
  const [ingredientIds, setIngredientIds] = useState<string[]>([]);
  const [preparationIds, setPreparationIds] = useState<string[]>([]);

  const dispatch = useDispatch();
  const navigation = useNavigation();
  const route = useRoute();
  const strTime = route.params?.strTime;

  //   console.log('strTime newRecipe: ',strTime);

  const handleAddIngredient = () => {
    setIngredients([...ingredients, ""]);
    setIngredientIds([...ingredientIds, String(ingredientIds.length + 1)]);
  };

  const handleRemoveIngredient = (index: number) => {
    const updatedIngredients = [...ingredients];
    updatedIngredients.splice(index, 1);
    setIngredients(updatedIngredients);
    setIngredientIds(ingredientIds.filter((id, i) => i !== index));
  };

  const handleIngredientChange = (text: string, index: number) => {
    const updatedIngredients = [...ingredients];
    updatedIngredients[index] = text;
    setIngredients(updatedIngredients);
  };

  const handleAddPreparationStep = () => {
    setPreparation([...preparation, ""]);
    setPreparationIds([...preparationIds, String(preparationIds.length + 1)]);
  };

  const handleRemovePreparationStep = (index: number) => {
    const updatedPreparation = [...preparation];
    updatedPreparation.splice(index, 1);
    setPreparation(updatedPreparation);
    setPreparationIds(preparationIds.filter((id, i) => i !== index));
  };

  const handlePreparationStepChange = (text: string, index: number) => {
    const updatedPreparation = [...preparation];
    updatedPreparation[index] = text;
    setPreparation(updatedPreparation);
  };

  const handleSaveRecipe = () => {
    const arrayIngredients = ingredients.map((ingredient, index) => ({
      strIngredient: ingredient,
      _id: ingredientIds[index],
    }));

    const arrayPreparation = preparation.map((step, index) => ({
      strPreparation: step,
      _id: preparationIds[index],
    }));

    const data = {
      strNameFood: strNameFood,
      numKcal: numKcal,
      ingredients: arrayIngredients,
      preparation: arrayPreparation,
      strTime: strTime,
    };
    console.log("data de newRecipe: ", data);
    dispatch(createRecipe(data));
    navigation.navigate("ManageRecipesList");
  };

  const handleCancel = () => {
    navigation.navigate("ManageRecipesList");
  };

  return (
    <SafeAreaView>
      <ScrollView>
        <ImageHeading img={IMAGE_REGISTER} alt="ManageRecipes" />
        <CustomHeader text="Nueva receta" />
        <CustomInput
          labelText="Nombre de la comida"
          value={strNameFood}
          onChangeText={(text: string) => setStrNameFood(text)}
        />
        <CustomInput
          labelText="Calorías"
          value={numKcal}
          onChangeText={(text: string) => setNumKcal(text)}
        />
        <CustomHeader text="Ingredientes" />
        {ingredients.map((ingredient, index) => (
          <React.Fragment key={index}>
            <CustomInput
              labelText={`Ingrediente ${index + 1}`}
              value={ingredient}
              onChangeText={(text: string) =>
                handleIngredientChange(text, index)
              }
            />
            <CustomButton
              name="Eliminar"
              onClick={() => handleRemoveIngredient(index)}
            />
          </React.Fragment>
        ))}
        <CustomButton
          name="Agregar Ingrediente"
          onClick={handleAddIngredient}
        />
        <CustomHeader text="Preparación" />
        {preparation.map((step, index) => (
          <React.Fragment key={index}>
            <CustomInput
              labelText={`Paso ${index + 1}`}
              value={step}
              onChangeText={(text: string) =>
                handlePreparationStepChange(text, index)
              }
            />
            <CustomButton
              name="Eliminar"
              onClick={() => handleRemovePreparationStep(index)}
            />
          </React.Fragment>
        ))}
        <CustomButton name="Agregar Paso" onClick={handleAddPreparationStep} />
        <CustomButton name="Guardar" onClick={handleSaveRecipe} />
        <CustomButton name="Cancelar" onClick={handleCancel} />
      </ScrollView>
    </SafeAreaView>
  );
}
