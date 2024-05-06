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
    SafeAreaView,
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
  import React, {useContext, useState} from "react";
  //import Logo from "../assets/resource/logoSF.png";
  import { VStack } from "@gluestack-ui/themed";
  import { FormControlLabel } from "@gluestack-ui/themed";
  import { FormControlLabelText } from "@gluestack-ui/themed";
  import { Input } from "@gluestack-ui/themed";
  import { InputField } from "@gluestack-ui/themed";
  import Button_lg from "../../components/Button_lg";
  import { useNavigation } from "@react-navigation/native";
  import { View } from "@gluestack-ui/themed";
  import Register from "../Register";
  import { ScrollView } from "react-native-gesture-handler";
  import { AnimatedText } from "react-native-reanimated/lib/typescript/reanimated2/component/Text";
  import ImageHeading from "../../components/ImageHeading";
  import { AuthContext } from "./AuthContext";
import { checkEmailExists, getUser, setUser } from "../../src/lib/Api/features/userSlice";
import {User} from '../../src/lib/models/userModel';
import { useDispatch } from "react-redux";
  
  
  export default function Login() {
    
    const navigation = useNavigation();
    const dispatch = useDispatch();
    const {login} = useContext(AuthContext);
    const [strEmail, setStrEmail] = useState('');
    const [strPassword, setStrPassword] = useState('');
    const [emailError, setEmailError] = useState('');

    const handleLogin = async () => {
        try {
            const emailExistsResult = await dispatch(checkEmailExists({ strEmail, strPassword }));
            // const emailExists = actionResult;
            // console.log('EmailExists: ', actionResult);
            if (emailExistsResult.payload) {
                const userData = await dispatch(getUser(strEmail));
                dispatch(setUser(userData.payload));
                navigation.navigate('Home');
            } else {
                setEmailError('El correo no esta registrado');
            }
        } catch (error) {
            console.error('Error al verificar el correo electrónico:', error);
            setEmailError('Error al verificar el correo electrónico');
        }
    };
  
  
  
    return (
      <>
        <SafeAreaView>
            {/* <Box  w={"$full"} h={"25%"} alignSelf="center"  bg="$blue300">
                <Image w={"100%"} h={"100%"} source={Logo} alt="logo" />
            </Box> */}
  
            {/* <ImageHeading img={Logo} alt={"Encabezado login"} /> */}
  
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
                  <InputField value={strEmail} onChangeText={setStrEmail} type="text" placeholder="ejemplo@email.com" />
                </Input>
  
                <FormControlLabel mb="$1">
                  <FormControlLabelText>Contraseña</FormControlLabelText>
                </FormControlLabel>
                <Input borderRadius={"$3xl"}>
                  <InputField value={strPassword} onChangeText={setStrPassword} type="password" placeholder="password" />
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
                  <Button_lg name="Iniciar sesión" function={handleLogin} />
                  {emailError !== '' && <Text style={{ color: 'red' }}>{emailError}</Text>}
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
        </SafeAreaView>
      </>
    );
  }
  