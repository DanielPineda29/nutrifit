import { Button, ButtonGroup, Center, SafeAreaView, View } from "@gluestack-ui/themed";
import React from "react";
import ImageHeading from "../../ImageHeading";
// import { IMAGE_REGISTER } from '../../../assets/RoutesImages';
import IMAGE_REGISTER from "../../../assets/resource/iconoRegistro.jpg";
import { HStack } from "@gluestack-ui/themed";
import { Box } from "@gluestack-ui/themed";
import { Heading } from "@gluestack-ui/themed";
import { Text } from "@gluestack-ui/themed";
import { ButtonText } from "@gluestack-ui/themed";

export default function ManageRecipesCard(props: any) {
  return (
    <View>
      <Center>
      <HStack  p='$12'  alignItems='center'  borderColor='$backgroundLight300'
          borderWidth={1} borderRadius="$lg" $dark-borderColor="$backgroundDark700">
          <Box maxWidth='$64' mr='$9'>
            <Heading mb='$1.5' >
              {props.strNameFood}
            </Heading>
          </Box>
          <ButtonGroup space='md'>
            <Button variant='outline' py='$2.5' action="secondary" onPress={props.onPressUpdate}>
              <ButtonText  fontSize='$sm' fontWeight='$medium'
              >
                Editar
              </ButtonText>
            </Button>
            <Button
              variant='solid'
              bg='$success700'
              borderColor='$success700'
              $hover-bg='$success800'
              $active-bg='$success700'
              onPress={props.onPress} 
            >
              <ButtonText  fontSize='$sm' fontWeight='$medium'>
                Borrar
              </ButtonText>
            </Button>
          </ButtonGroup>
        </HStack>
      </Center>
    </View>
  );
}
