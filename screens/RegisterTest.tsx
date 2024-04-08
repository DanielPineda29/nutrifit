import { Box, View, Image } from "@gluestack-ui/themed";
import React from "react";
import Logo from '../resource/iconoRegistro.jpg';

export default function RegisterTest() {
    return(
        <View>
            <Box w={"$full"} h={"30%"} alignSelf="center" >
                <Image w={"100%"} h={"100%"} source={Logo} alt="logo" />
            </Box>

            <Box alignSelf="center" marginTop={"$5"} w={"90%"} h={"90%"} >

            </Box>
        </View>
    );
}