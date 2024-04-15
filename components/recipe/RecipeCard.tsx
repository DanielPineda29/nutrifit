import { Box, Button, ButtonText, Card, Heading, Image, VStack } from '@gluestack-ui/themed';
import React from 'react';
import { View, Text } from 'react-native';

const RecipeCard = (props: any) => {
  return (
    <Card p="$5" borderRadius="$lg" m="$3" backgroundColor={props.bgColor}>
          <Image
            mb="$6"
            h={240}
            w={360}
            borderRadius="$md"
            source={props.img}
            alt="cardImage"
          />
          <VStack mb="$6">
            <Heading size="md" fontFamily="$heading" mb="$4">
              {props.textHeading}
            </Heading>
            <Text size="sm" fontFamily="$heading">
              {props.text}
            </Text>
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
              <ButtonText size="sm">{props.buttonText}</ButtonText>
            </Button>
          </Box>
        </Card>
  );
};

export default RecipeCard;