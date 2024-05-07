import React from "react";
import { View } from "react-native";
import ImageHeading from "../ImageHeading";

import IMAGE from "../../assets/resource/misdatos.jpg";
import { Button, Center, Heading, Icon, Text } from "@gluestack-ui/themed";
import EditIcon from "@gluestack-ui/themed-native-base";
import { User } from "../../src/lib/models/userModel";

interface UserInfoProps extends User {
  onPress: () => void;
}

const UserInfo = ({onPress, ...props}: UserInfoProps) => {
  return (
    <View>
      <ImageHeading img={IMAGE} alt={"Mis datos"} />
      <Center>
        <Heading>Mis datos</Heading>
        <Text>{props.strName + ' ' + props.strLastname}</Text>
        <Text>Email</Text>
        <Text>{props.strEmail}</Text>
        <Text>
          Recuerda actualizar tus datos personales cada cierto tiempo para
          obtener una estimación de ingesta diaria de calorías recomentada. Esto
          dependerá de tus avances.
        </Text>
        <Button onPress={onPress}>
          <Icon as={EditIcon} m="$2" w="$6" h="$6" />
        </Button>
        <Text>{"Edad: " + props.numAge}</Text>
        <Text>{"Altura (cm): " + props.numHeight}</Text>
        <Text>{"Sexo: " + props.strSexo}</Text>
        <Text>{"Peso (kg): " + props.numWeight}</Text>
        <Text>{"Actividad física: " + props.strActivity}</Text>
        <Text>{"Calorías diarias: " + props.numDailyCalories}</Text>
      </Center>
    </View>
  );
};

export default UserInfo;
