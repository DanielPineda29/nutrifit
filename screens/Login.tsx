import {
  ButtonText,
  ButtonIcon,
  ButtonGroup,
  Icon,
  AddIcon,
  InfoIcon,
  ButtonSpinner,
  ArrowUpIcon,
  HStack,
  ThreeDotsIcon,
} from "@gluestack-ui/themed";

import {
  Text,
  Box,
  Image,
  Center,
  Heading,
  Link,
  LinkText,
  Button,
} from "@gluestack-ui/themed";
import React from "react";
import Logo from "../resource/logoSF.png";
import { VStack } from "@gluestack-ui/themed";
import { FormControlLabel } from "@gluestack-ui/themed";
import { FormControlLabelText } from "@gluestack-ui/themed";
import { Input } from "@gluestack-ui/themed";
import { InputField } from "@gluestack-ui/themed";
import Button_lg from "../components/Button_lg";
import { useNavigation } from "@react-navigation/native";
import { View } from "@gluestack-ui/themed";
import Register from "./Register";
import { ScrollView } from "react-native-gesture-handler";
import { AnimatedText } from "react-native-reanimated/lib/typescript/reanimated2/component/Text";
export default function Login() {
  const navigation = useNavigation();
  return (
    <>
      <View>
          <Box  w={"$full"} h={"25%"} alignSelf="center"  bg="$blue300">
              <Image w={"100%"} h={"100%"} source={Logo} alt="logo" />
          </Box>

          <Box alignSelf="center" marginTop={"$5"} w={"90%"} h={"90%"} >
            <VStack>
              <Heading size={"3xl"} alignSelf="center">
                {"NutriFit"}
              </Heading>
              
              <Heading size={"2xl"}>{"Inicio de sesión"}</Heading>

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
                sx={{
                  justifyContent: "center",
                  alignItems: "center",
                }}
                reversed={false}
                margin={"$5"}
              >
                <Button action="primary" onPress={() => navigation.navigate('Home')}>
                  <Text>Iniciar sesión</Text>
                  </Button>
              </VStack>

              <VStack>
                <Button
                  action={"primary"}
                  variant={"link"}
                  size={"md"}
                  isDisabled={false}
                  onPress={() => navigation.navigate("Register")}
                >
                  <ButtonText>
                    Si no tienes una cuenta registrate aquí
                  </ButtonText>
                </Button>
              </VStack>
            </VStack>
          </Box>
      </View>
    </>
  );
}
