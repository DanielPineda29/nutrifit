import React from 'react';
import { View, Text } from 'react-native';
import ImageHeading from '../../components/ImageHeading';

import IMAGE from '../../assets/resource/misdatos.jpg';
import Button_lg from '../../components/Button_lg';
import { useNavigation } from '@react-navigation/native';
import { Heading } from '@gluestack-ui/themed';

const MenuUser = () => {

    const navigation = useNavigation();

  return (
    <View>
      <ImageHeading img={IMAGE} alt={"Datos de usuario"} />
      <Heading>Configuración</Heading>
      <Button_lg name={"Mis datos"} function={ () => navigation.navigate('UserInfo') } />
    </View>
  );
};

export default MenuUser;