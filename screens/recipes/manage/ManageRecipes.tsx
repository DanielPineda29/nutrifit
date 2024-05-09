import React from "react";
import {
  Button,
  ButtonText,
  FormControl,
  FormControlLabel,
  FormControlLabelText,
  Heading,
  Input,
  InputField,
  SafeAreaView,
  ScrollView,
} from "@gluestack-ui/themed";
import Button_lg from "../../../components/Button_lg";
import ImageHeading from "../../../components/ImageHeading";
import { useNavigation } from "@react-navigation/native";
// import { IMAGE_REGISTER } from '../../../assets/RoutesImages';
import IMAGE_REGISTER from "../../../assets/resource/iconoRegistro.jpg";
import CustomButton from "../../../components/CustomButton";
import { useDispatch } from "react-redux";
import { getRecipes, setRecipes } from "../../../src/lib/Api/features/recipesSlice";

export default function ManageRecipes() {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const handleScreenList = async (strTime: string, title: string) => {
    try {
      const recipesData = await dispatch(getRecipes(strTime));
      dispatch(setRecipes(recipesData.payload));
      navigation.navigate('ManageRecipesList', { strTime, title });
    } catch (error) {
      console.log("Error al obtener las recetas: ", error);
    }
  };

  return (
    <SafeAreaView>
      <ImageHeading img={IMAGE_REGISTER} alt="ManageRecipes" />
      <CustomButton name="Desayunos" onClick={() => handleScreenList("Breakfast", "Desayunos")} />
      <CustomButton name="Comidas" onClick={() => handleScreenList("Meals", "Comidas")} />
      <CustomButton name="Cenas" onClick={() => handleScreenList("Dinner", "Cenas")} />
      <CustomButton name="Colaciones" onClick={() => handleScreenList("Collation", "Colaciones")} />
    </SafeAreaView>
  );
}
