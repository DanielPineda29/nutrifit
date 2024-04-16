import React from 'react';
import { View, Text } from 'react-native';
import { VStack } from '@gluestack-ui/themed';
import ImageHeading from '../../components/ImageHeading';
import RecipeInfo from '../../components/recipe/RecipeInfo';
import Imagen from '../../assets/resource/logo.jpg';

const RecipesInfo = () => {
  return (
    <VStack>
        <ImageHeading img={Imagen} alt={"Imagen"} />
        <RecipeInfo 
            nameFood={"Sándwich Montecristo"}
            ingredients={"2 rebanadas de pan de caja rico en fibra. 2 rebanadas de jamón de pavo. 40 gr de queso panela. Jitomate y lechuga al gusto. Mostaza.1 cucharadita de mayonesa."}
            preparation={"Caliente en un sartén el pan. Coloque sobre una rebanada los ingredientes y en la otra unte la mayonesa. Tape y disfrute."}
            kcal={295}
        />
    </VStack>
  );
};

export default RecipesInfo;