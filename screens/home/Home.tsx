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
  
  const Home = () => {
    return (
      <View>
        <ScrollView>
          <VStack space="2xl">
            <HStack space="md">
              <Avatar bgColor="$indigo600">
                <AvatarFallbackText>Daniel Pineda</AvatarFallbackText>
                <AvatarBadge $dark-borderColor="$black" />
              </Avatar>
              <VStack>
                <Heading size="sm">Daniel Pineda Juárez</Heading>
                <Text size="sm">Developer</Text>
              </VStack>
            </HStack>
          </VStack>
  
          <VStack>
            <HStack>
              <Heading>Bienvenido</Heading>
            </HStack>
          </VStack>
        </ScrollView>
      </View>
    );
  };
  
  export default Home;
  