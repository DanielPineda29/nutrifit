import React, { useState } from "react";
import { SafeAreaView, ScrollView } from "@gluestack-ui/themed";
import ImageHeading from "../../../components/ImageHeading";
import IMAGE_REGISTER from "../../../assets/resource/iconoRegistro.jpg";
import CustomHeader from "../../../components/CustomHeader";
import CustomInput from "../../../components/CustomInput";
import CustomButton from "../../../components/CustomButton";

export default function NewRecipe() {
  const [strNameFood, setStrNameFood] = useState("");
  const [numKcal, setNumKcal] = useState("");
  const [ingredients, setIngredients] = useState<string[]>([]);
  const [preparation, setPreparation] = useState<string[]>([]);

  const handleAddIngredient = () => {
    setIngredients([...ingredients, ""]);
  };

  const handleRemoveIngredient = (index: number) => {
    const updatedIngredients = [...ingredients];
    updatedIngredients.splice(index, 1);
    setIngredients(updatedIngredients);
  };

  const handleIngredientChange = (text: string, index: number) => {
    const updatedIngredients = [...ingredients];
    updatedIngredients[index] = text;
    setIngredients(updatedIngredients);
  };

  const handleAddPreparationStep = () => {
    setPreparation([...preparation, ""]);
  };

  const handleRemovePreparationStep = (index: number) => {
    const updatedPreparation = [...preparation];
    updatedPreparation.splice(index, 1);
    setPreparation(updatedPreparation);
  };

  const handlePreparationStepChange = (text: string, index: number) => {
    const updatedPreparation = [...preparation];
    updatedPreparation[index] = text;
    setPreparation(updatedPreparation);
  };

  const handleSaveRecipe = () => {
    // Aquí puedes enviar los datos de la nueva receta al servidor o hacer lo que necesites con ellos
  };

  const handleCancel = () => {
    // Lógica para cancelar la creación de la receta
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
              onChangeText={(text: string) => handleIngredientChange(text, index)}
            />
            <CustomButton
              name="Eliminar"
              onClick={() => handleRemoveIngredient(index)}
            />
          </React.Fragment>
        ))}
        <CustomButton name="Agregar Ingrediente" onClick={handleAddIngredient} />
        <CustomHeader text="Preparación" />
        {preparation.map((step, index) => (
          <React.Fragment key={index}>
            <CustomInput
              labelText={`Paso ${index + 1}`}
              value={step}
              onChangeText={(text: string) => handlePreparationStepChange(text, index)}
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
