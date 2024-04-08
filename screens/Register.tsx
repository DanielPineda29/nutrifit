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
} from "@gluestack-ui/themed";
import React from "react";
import Logo from "../resource/iconoRegistro.jpg";
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

export default function Register() {
  const navigation = useNavigation();
  return (
    <ScrollView>
      <Box w={"$full"} h={"30%"} alignSelf="center" bg="$blue300">
        <Image w={"100%"} h={"100%"} source={Logo} alt="logo" />
      </Box>

      <Box alignSelf="center" marginTop={"$5"} w={"90%"} h={"90%"}>
        <VStack space="md" reversed={false}>
          <Heading size={"3xl"} alignSelf="center">
            {"Nutrifit"}
          </Heading>
          <Heading size={"2xl"}>{"Nuevo registro"}</Heading>

          <FormControlLabel mb="$1">
            <FormControlLabelText>Nombre</FormControlLabelText>
          </FormControlLabel>
          <Input borderRadius={"$3xl"}>
            <InputField type="text" placeholder="Marcos" />
          </Input>

          <FormControlLabel mb="$1">
            <FormControlLabelText>Apellidos</FormControlLabelText>
          </FormControlLabel>
          <Input borderRadius={"$3xl"}>
            <InputField type="text" placeholder="Estrada" />
          </Input>

          <FormControlLabel mb="$1">
            <FormControlLabelText>Edad</FormControlLabelText>
          </FormControlLabel>
          <Input borderRadius={"$3xl"}>
            <InputField type="text" placeholder="27" />
          </Input>

          <FormControlLabel mb="$1">
            <FormControlLabelText>Altura</FormControlLabelText>
          </FormControlLabel>
          <Input borderRadius={"$3xl"}>
            <InputField type="text" placeholder="174" />
          </Input>

          <FormControlLabel mb="$1">
            <FormControlLabelText>Sexo</FormControlLabelText>
            <FormControl>
              <Select>
                <SelectTrigger>
                  <SelectInput placeholder="Sexo" />
                  
                </SelectTrigger>
                <SelectPortal>
                  <SelectBackdrop />
                  <SelectContent>
                    <SelectDragIndicatorWrapper>
                      <SelectDragIndicator />
                    </SelectDragIndicatorWrapper>
                    <SelectItem label="India" value="India" />
                    <SelectItem label="Sri Lanka" value="Sri Lanka" />
                    <SelectItem label="Uganda" value="Uganda" />
                    <SelectItem label="Japan" value="Japan" />
                  </SelectContent>
                </SelectPortal>
              </Select>
            </FormControl>
          </FormControlLabel>

          <FormControlLabel mb="$1">
            <FormControlLabelText>Email</FormControlLabelText>
          </FormControlLabel>
          <Input borderRadius={"$3xl"}>
            <InputField type="text" placeholder="ejemplo@email.com" />
          </Input>

          <FormControlLabel mb="$1">
            <FormControlLabelText>Contraseña</FormControlLabelText>
          </FormControlLabel>
          <Input borderRadius={"$3xl"}>
            <InputField type="password" placeholder="password" />
          </Input>

          <VStack
            space={"sm"}
            sx={{ justifyContent: "center", alignItems: "center" }}
            reversed={false}
            margin={"$5"}
          >
            <Button_lg />
          </VStack>
        </VStack>
      </Box>
    </ScrollView>
  );
}
