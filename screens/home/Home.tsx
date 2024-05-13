//import React from "react";
import { View, StyleSheet } from "react-native";
import Button_lg from "../../components/Button_lg";
//import { Box } from "@gluestack-ui/themed";
import {
  Box,
  VStack,
  HStack,
  Avatar,
  AvatarBadge,
  AvatarFallbackText,
  AvatarImage,
  Heading,
  Text,
  ScrollView,
  Card,
  Center,
} from "@gluestack-ui/themed";

import React, { useContext } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { getUser, updateUser } from "../../src/lib/Api/features/userSlice";

const reset = () => {
  console.log("reset");
};



const Home = () => {

  const { user } = useSelector(state => state.user);
  const dispatch = useDispatch();

  const resetCaloriesConsumed = async () => {
    try {
      const updatedUser = { ...user, numCaloriesConsumed: 0 };
      dispatch(updateUser({ id: user._id, payload: updatedUser }));
      dispatch(getUser(user.strEmail));
    } catch (error) {
      console.error("Error al reiniciar las calorías:", error);
    }
  };

  return (
    <View style={styles.container}>
      <ScrollView h="$100" w="$100">
        <Center mt="$3" mb="$4">
          <Box marginTop={"10%"} alignSelf="center" h={600} w={400} >

            <Card 
              size="md"
              variant="elevated"
              m="$3"
              backgroundColor="#ADD8E6" // Color de fondo del contenedor
              borderRadius="$2xl" // Bordes redondeados
              shadow="md" // Sombra
              padding="$6" // Espaciado interno
            >
              <Box  w={200}>

              <VStack >
                <HStack space="2xl" alignItems="center">
                  <Avatar size="2xl" bgColor="#2039ED">
                    <AvatarFallbackText>{user.strName + user.strLastname}</AvatarFallbackText>
                  </Avatar>
                  <VStack>
                    <Heading size="xl">
                      {user.strName + ' ' + user.strLastname}
                    </Heading>
                    <Text size="2xl">Bienvenido</Text>
                  </VStack>
                </HStack>
              </VStack>
              </Box>
            </Card>

            <Card
              size="md"
              variant="elevated"
              m="$3"
              backgroundColor="#ADD8E6" // Color de fondo del contenedor
              borderRadius="$2xl" // Bordes redondeados
              shadow="md" // Sombra
              padding="$5" // Espaciado interno
            >

              <VStack>
                <VStack>
                  <HStack alignSelf="center">
                    <Heading size="3xl" fontSize={"$4xl"}>
                      Progreso
                    </Heading>
                  </HStack>
                  <HStack alignSelf="center" marginBottom={"$2"}>
                    <Heading fontSize={"$2xl"}>Kcal consumidas</Heading>
                  </HStack>
                  <HStack alignSelf="center" margin={"$5"}>
                    <Text fontSize={"$2xl"}>{user.numCaloriesConsumed} de {user.numDailyCalories}</Text>
                  </HStack>
                  <Button_lg
                    name="Reiniciar"
                    function={resetCaloriesConsumed}
                  />
                </VStack>
              </VStack>
            </Card>
          </Box>
        </Center>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFAFA", 
  },
});

export default Home;
