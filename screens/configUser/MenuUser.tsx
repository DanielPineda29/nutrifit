import React from 'react';
import { View, Text } from 'react-native';
import ImageHeading from '../../components/ImageHeading';

import IMAGE from '../../assets/resource/misdatos.jpg';
import Button_lg from '../../components/Button_lg';
import { useNavigation } from '@react-navigation/native';
import { Heading } from '@gluestack-ui/themed';

const MenuUser = () => {

    const navigation = useNavigation();

    const handleLogout = () => {
      navigation.navigate('Login');
    };

  return (
    <View>
      <ImageHeading img={IMAGE} alt={"Datos de usuario"} />
      <Heading>Configuración</Heading>
      <Button_lg name={"Mis datos"} function={ () => navigation.navigate('UserInfo') } />
      <Button_lg name={"Mis recetas"} function={ () => navigation.navigate('FavRecipes') } />
      <Button_lg name={"Cerrar sesión"} function={ handleLogout } />
    </View>
  );
};

export default MenuUser;