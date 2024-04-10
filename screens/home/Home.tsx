import { Box } from "@gluestack-ui/themed";
import {
  VStack,
  HStack,
  Avatar,
  AvatarBadge,
  AvatarFallbackText,
  AvatarImage,
  Heading,
  Text,
  ScrollView,
} from "@gluestack-ui/themed";
import React from "react";
import { View } from "react-native";
import Button_lg from "../../components/Button_lg";

const reset = () => {
  console.log("reset");
};

const Home = () => {
  return (
    <View>
      <ScrollView>
        <Box marginTop={"10%"} alignSelf="center">
          <VStack>
            <HStack space="2xl">
              <Avatar size="2xl" bgColor="$indigo600">
                <AvatarFallbackText>Daniel Pineda</AvatarFallbackText>
              </Avatar>
              <VStack>
                <Heading size="2xl" marginTop={"$8"}>
                  Daniel Pineda
                </Heading>
                <Text size="2xl">Bienvenido</Text>
              </VStack>
            </HStack>
          </VStack>

          <VStack>
            <HStack alignSelf="center" marginTop={"10%"}>
              <Heading size="5xl" fontSize={"$4xl"}>
                Progreso
              </Heading>
            </HStack>
            <HStack alignSelf="center" marginBottom={"$2"}>
              <Heading fontSize={"$3xl"}>Kcal consumidas</Heading>
            </HStack>
            <HStack alignSelf="center" margin={"$5"}>
              <Text fontSize={"$2xl"}>1290 de 2500</Text>
            </HStack>
            <Button_lg
              name="Reiniciar"
              function={() => {
                console.log("Reiniciar");
              }}
            />
          </VStack>
        </Box>
      </ScrollView>
    </View>
  );
};

export default Home;
