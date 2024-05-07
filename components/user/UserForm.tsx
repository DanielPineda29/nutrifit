import React, { useEffect, useState } from "react";
import { View } from "react-native";
import ImageHeading from "../ImageHeading";

import IMAGE from "../../assets/resource/misdatos.jpg";
import {
  Box,
  Center,
  FormControl,
  FormControlLabel,
  Heading,
  Icon,
  InputField,
  SelectBackdrop,
  SelectDragIndicator,
  SelectDragIndicatorWrapper,
  SelectIcon,
  SelectItem,
} from "@gluestack-ui/themed";
import { User, listSexo, listActivitys } from "../../src/lib/models/userModel";
import { useNavigation, useRoute } from "@react-navigation/native";
import { FormControlLabelText } from "@gluestack-ui/themed";
import { Input } from "@gluestack-ui/themed";
import Button_lg from "../Button_lg";
import { Select } from "@gluestack-ui/themed";
import { SelectTrigger } from "@gluestack-ui/themed";
import { SelectInput } from "@gluestack-ui/themed";
import { SelectPortal } from "@gluestack-ui/themed";
import { SelectContent } from "@gluestack-ui/themed";
import { ChevronDownIcon } from "@gluestack-ui/themed-native-base";
import { useDispatch, useSelector } from "react-redux";
import {
  createUser,
  getUser,
  setUser,
  setUserEdit,
  updateUser,
} from "../../src/lib/Api/features/userSlice";

interface UserInfoProps extends User {
  onPress: () => void;
}

const UserForm = ({ onPress, ...props }: UserInfoProps) => {
  const router = useRoute();
  const navigation = useNavigation();
  const title = router.params?.title;
  const id = router.params?.id;
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user);

  const [strName, setStrName] = useState("");
  const [strLastname, setStrLastname] = useState(props.strLastname || "");
  const [numAge, setNumAge] = useState(props.numAge || 0);
  const [numHeight, setNumHeight] = useState(props.numHeight || 0);
  const [numWeight, setNumWeight] = useState(props.numWeight || 0);
  const [strSexo, setStrSexo] = useState(props.strSexo || "");
  const [strActivity, setStrActivity] = useState(props.strActivity || "");
  const [strEmail, setStrEmail] = useState(props.strEmail || "");
  const [strPassword, setStrPassword] = useState(props.strPassword || "");

  const [strEmailCopy, setStrEmailCopy] = useState(props.strEmail);

  const restoreOriginalUserData = async () => {
    if (id) {
      await dispatch(getUser(strEmailCopy));
      // setStrName(user.strName);
      // setStrLastname(user.strLastname);
      // setNumAge(user.numAge);
      // setNumHeight(user.numHeight);
      // setNumWeight(user.numWeight);
      // setStrSexo(user.strSexo);
      // setStrActivity(user.strActivity);
      // navigation.navigate('UserInfo');
    } else {
      setStrName('');
      setStrLastname('');
      setNumAge(0);
      setNumHeight(0);
      setNumWeight(0);
      setStrSexo('');
      setStrActivity('');
    }
    // navigation.navigate('UserInfo');
    navigation.navigate('UserInfo');
  };

  // useEffect(() => {
  //   setOriginalUserData(props);
  // }, []);

  const handleSaveUser = async () => {
    try {
      if (id) {
        const data = {
          _id: id,
          strName: user.strName,
          strLastname: user.strLastname,
          numAge: user.numAge,
          numHeight: user.numHeight,
          numWeight: user.numWeight,
          strSexo: strSexo,
          strActivity: strActivity,
          strRole: user.strRole
        };
        console.log('handleSaveUser DATA => ', data);
        console.log('handleSaveUser ID => ', id);
        await dispatch(updateUser({ id, payload: data }));
        await dispatch(getUser(strEmailCopy));

      } else {
        const data = {
          strName: user.strName,
          strLastname: user.strLastname,
          numAge: user.numAge,
          numHeight: user.numHeight,
          numWeight: user.numWeight,
          strSexo: strSexo,
          strActivity: strActivity,
          strRole: "Usuario",
        };
        dispatch(createUser(data));
      }
      navigation.navigate("UserInfo");
    } catch (error) {
      console.error("Error al guardar o crear el usuario:", error);
    }
  };

  const handleChange = (key: string, value: string | number) => {
    dispatch(setUserEdit({ ...user, [key]: value }));
  };

  console.log("ID A EDITAR:", id);

  return (
    <View>
      <ImageHeading img={IMAGE} alt={"Mis datos"} />
      <Center>
        <Heading>{title}</Heading>

        <FormControl minWidth="$80">
          <FormControlLabel>
            <FormControlLabelText>Nombre</FormControlLabelText>
          </FormControlLabel>
          <Input>
            <InputField
              value={props.strName || ""}
              onChangeText={(text: string) => handleChange("strName", text)}
            />
          </Input>
          <FormControlLabel>
            <FormControlLabelText>Apellidos</FormControlLabelText>
          </FormControlLabel>
          <Input>
            <InputField
              value={props.strLastname || ""}
              onChangeText={(text: string) => handleChange("strLastname", text)}
            />
          </Input>
          <FormControlLabel>
            <FormControlLabelText>Edad</FormControlLabelText>
          </FormControlLabel>
          <Input>
            <InputField
              value={String(props.numAge) || ""}
              keyboardType="numeric"
              onChangeText={(text: string) => handleChange("numAge", text)}
            />
          </Input>
          <FormControlLabel>
            <FormControlLabelText>Altura (cm)</FormControlLabelText>
          </FormControlLabel>
          <Input>
            <InputField 
              value={String(props.numHeight) || ""} 
              keyboardType="numeric" 
              onChangeText={(text: string) => handleChange("numHeight", text)}
            />
          </Input>
          <FormControlLabel>
            <FormControlLabelText>Peso (kg)</FormControlLabelText>
          </FormControlLabel>
          <Input>
            <InputField 
              value={String(props.numWeight) || ""} 
              keyboardType="numeric"
              onChangeText={(text: string) => handleChange("numWeight", text)}
            />
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
          <Button_lg name="Guardar" function={handleSaveUser}/>
          <Button_lg name="Cancelar" function={restoreOriginalUserData} />
        </FormControl>
      </Center>
    </View>
  );
};

export default UserForm;
