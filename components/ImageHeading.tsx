import { Box, Center, Image } from "@gluestack-ui/themed";
import React from "react";
import { View, Text } from "react-native";

const ImageHeading = (props: any) => {
  return (
    //   <Box w={"$full"} h={"20%"} alignSelf="center" marginTop={"$11"}>
    //     <Image w={"100%"} h={"100%"} source={props.img} alt="logo" />
    //   </Box>
    <Center>
      <Image size="2xl" source={props.img} alt={props.alt }
      style={{ width: 350, height: 200, marginTop: 70, borderRadius: 10 }}
      />
    </Center>
  );
};

export default ImageHeading;
