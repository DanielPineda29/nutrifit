import {
  Box,
  Image,
  Heading,
  ScrollView,
  FormControl,
  Select,
  SelectTrigger,
  SelectInput,
  SelectIcon,
  SelectBackdrop,
  View,
  Center,
} from "@gluestack-ui/themed";
import React, { useState } from "react";
import Logo from "../assets/resource/iconoRegistro.jpg";
import { VStack } from "@gluestack-ui/themed";
import { FormControlLabel } from "@gluestack-ui/themed";
import { FormControlLabelText } from "@gluestack-ui/themed";
import { Input } from "@gluestack-ui/themed";
import { InputField } from "@gluestack-ui/themed";
import Button_lg from "../components/Button_lg";
import { useNavigation } from "@react-navigation/native";
import { SelectActionsheetContent } from "@gluestack-ui/config/build/theme";
import { Icon } from "@gluestack-ui/themed";
import { SelectPortal } from "@gluestack-ui/themed";
import { SelectContent } from "@gluestack-ui/themed";
import { SelectDragIndicatorWrapper } from "@gluestack-ui/themed";
import { SelectDragIndicator } from "@gluestack-ui/themed";
import { SelectItem } from "@gluestack-ui/themed";
import { listSexo, listActivitys } from "../src/lib/models/userModel";
import ImageHeading from "../components/ImageHeading";
import { ChevronDownIcon } from "@gluestack-ui/themed-native-base";
import { useDispatch } from "react-redux";
import { createUser } from "../src/lib/Api/features/userSlice";

export default function Register() {

  const [strEmail, setStrEmail] = useState("");
  const [strPassword, setStrPassword] = useState("");
  const [strName, setStrName] = useState("");
  const [strLastname, setStrLastname] = useState("");
  const [numAge, setNumAge] = useState("");
  const [numHeight, setNumHeight] = useState("");
  const [numWeight, setNumWeight] = useState("");
  const [strSexo, setStrSexo] = useState("");
  const [strActivity, setStrActivity ] = useState("");


  const navigation = useNavigation();
  const dispatch = useDispatch();

  const handleRegisterUser = () => {
    const data = {
      strEmail: strEmail,
      strPassword: strPassword,
      strName: strName,
      strLastname: strLastname,
      numAge: numAge,
      numHeight: numHeight,
      numWeight: numWeight,
      strSexo: strSexo,
      strActivity: strActivity,
      strRole: 'User',
      favRecipes: [],
      favExercises: [],
    };
    dispatch(createUser(data));
    navigation.navigate('Login');
  };

  const handleCancel = () => {
    navigation.navigate('Login');
  };
  

  return (
    <ScrollView h={"100"} w={"100"}>
      <View>
        <ImageHeading img={Logo} alt={"Mis datos"} />
        <Center>
          <FormControl minWidth="$80">
            <FormControlLabel>
              <FormControlLabelText>Correo</FormControlLabelText>
            </FormControlLabel>
            <Input>
              <InputField value={strEmail} onChangeText={setStrEmail} />
            </Input>
            <FormControlLabel>
              <FormControlLabelText>Contraseña</FormControlLabelText>
            </FormControlLabel>
            <Input>
              <InputField value={strPassword} onChangeText={setStrPassword} />
            </Input>
            <FormControlLabel>
              <FormControlLabelText>Nombre</FormControlLabelText>
            </FormControlLabel>
            <Input>
              <InputField value={strName} onChangeText={setStrName} />
            </Input>
            <FormControlLabel>
              <FormControlLabelText>Apellidos</FormControlLabelText>
            </FormControlLabel>
            <Input>
              <InputField value={strLastname} onChangeText={setStrLastname} />
            </Input>
            <FormControlLabel>
              <FormControlLabelText>Edad</FormControlLabelText>
            </FormControlLabel>
            <Input>
              <InputField value={numAge} onChangeText={setNumAge} />
            </Input>
            <FormControlLabel>
              <FormControlLabelText>Altura (cm)</FormControlLabelText>
            </FormControlLabel>
            <Input>
              <InputField value={numHeight} onChangeText={setNumHeight} />
            </Input>
            <FormControlLabel>
              <FormControlLabelText>Peso (kg)</FormControlLabelText>
            </FormControlLabel>
            <Input>
              <InputField value={numWeight} onChangeText={setNumWeight} />
            </Input>
            <FormControlLabel>
            <FormControlLabelText>Sexo</FormControlLabelText>
          </FormControlLabel>
          <Select selectedValue={strSexo} onValueChange={setStrSexo}>
            <SelectTrigger variant="outline" size="md">
              <SelectInput placeholder="Selecciona tu sexo" />
              <SelectIcon mr="$3">
                <Icon as={ChevronDownIcon} />
              </SelectIcon>
            </SelectTrigger>
            <SelectPortal>
              <SelectBackdrop />
              <SelectContent>
                <SelectDragIndicatorWrapper>
                  <SelectDragIndicator />
                </SelectDragIndicatorWrapper>
                {listSexo.map((option) => (
                  <SelectItem
                    key={option.value}
                    value={option.value}
                    label={option.label}
                    onPress={() => setStrSexo(option.value)}
                  >
                    {option.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </SelectPortal>
          </Select>
          <FormControlLabel>
            <FormControlLabelText>Actividad física</FormControlLabelText>
          </FormControlLabel>
          <Select selectedValue={strActivity} onValueChange={setStrActivity}>
            <SelectTrigger variant="outline" size="md">
              <SelectInput placeholder="Selecciona tu sexo" />
              <SelectIcon mr="$3">
                <Icon as={ChevronDownIcon} />
              </SelectIcon>
            </SelectTrigger>
            <SelectPortal>
              <SelectBackdrop />
              <SelectContent>
                <SelectDragIndicatorWrapper>
                  <SelectDragIndicator />
                </SelectDragIndicatorWrapper>
                {listActivitys.map((option) => (
                  <SelectItem
                    key={option.value}
                    value={option.value}
                    label={option.label}
                    onPress={() => setStrActivity(option.value)}
                  >
                    {option.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </SelectPortal>
          </Select>
          </FormControl>
          <FormControl>
            <Button_lg name="Registrarse" function={handleRegisterUser} />
            <Button_lg name="Cancelar" function={handleCancel} />
          </FormControl>
        </Center>
      </View>
    </ScrollView>
  );
}
