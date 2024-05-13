import { Box, ButtonText, Card, Heading } from "@gluestack-ui/themed";
import { Text } from "@gluestack-ui/themed";
import { Button } from "@gluestack-ui/themed";
import { VStack } from "@gluestack-ui/themed";
import { Image } from "@gluestack-ui/themed";
import { View } from "@gluestack-ui/themed";
import React from "react";

interface CardProps {
    // bgColor: string;
    // img: string;
    textHeading: string;
    // text: string;
    // buttonText: string;
    // onClick: () => void;
    img: string;
  }

const FavRecipeCard: React.FC<CardProps> = (props) => {
    return (
        <Card p="$5" borderRadius="$lg" maxWidth={360} m="$3">
          <Image
            mb="$6"
            h={240}
            width="$full"
            borderRadius="$md"
            source={{
              uri: props.img
            }}
            alt="Imagen"
          />
          <VStack mb="$6">
            <Heading size="md" fontFamily="$heading" mb="$4">
              {props.textHeading}
            </Heading>
          </VStack>
          <Box
            flexDirection="column"
            sx={{
              "@sm": {
                flexDirection: "row",
              },
            }}
          >
            <Button
              px="$4"
              py="$2"
              fontFamily="$heading"
              mr="$0"
              mb="$3"
              sx={{
                "@sm": {
                  mr: "$3",
                  mb: "$0",
                  flex: 1,
                },
              }}
            >
              <ButtonText size="sm">Ver más</ButtonText>
            </Button>
            <Button
              px="$4"
              py="$2"
              variant="outline"
              fontFamily="$heading"
              borderColor="$borderLight300"
              $dark-borderColor="$backgroundDark600"
              sx={{
                "@sm": {
                  flex: 1,
                },
              }}
            >
              <ButtonText
                size="sm"
                color="$textLight600"
                $dark-color="$textDark400"
              >
                Quitar de favoritos
              </ButtonText>
            </Button>
          </Box>
        </Card>
      )
}

export default FavRecipeCard;