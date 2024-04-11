import { Heading, Image, Box } from "@gluestack-ui/themed";
import React from "react";
import { View, Text } from "react-native";

import Portada from "../../assets/resource/iconoRegistro.jpg";

const MiComponente = () => {
  return (
    <View>
        <Image w={"100%"} h={"50%"} source={Portada} alt="Portada"/>
      <Box>
        <Heading>
            Hola, soy el componente RecipeMenu!
        </Heading>
      </Box>
    </View>
  );
};

export default MiComponente;
