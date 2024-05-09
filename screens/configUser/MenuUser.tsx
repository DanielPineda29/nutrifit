import React from 'react';
import { View, Text } from 'react-native';
import ImageHeading from '../../components/ImageHeading';

import IMAGE from '../../assets/resource/misdatos.jpg';
import Button_lg from '../../components/Button_lg';
import { useNavigation } from '@react-navigation/native';
import { Heading } from '@gluestack-ui/themed';
import { useDispatch, useSelector } from 'react-redux';
import { resetUser } from '../../src/lib/Api/features/userSlice';

const MenuUser = () => {

    const navigation = useNavigation();
    const dispatch = useDispatch();
    const {user} = useSelector(state => state.user);

    const handleLogout = () => {
      dispatch(resetUser());
      navigation.navigate('Login');
    };

  return (
    <View>
      <ImageHeading img={IMAGE} alt={"Datos de usuario"} />
      <Heading>Configuración</Heading>
      <Button_lg name={"Mis datos"} function={ () => navigation.navigate('UserInfo') } />
      <Heading>Favoritos</Heading>
      <Button_lg name={"Mis recetas favoritas"} function={ () => navigation.navigate('FavRecipes') } />
      <Button_lg name={"Mis ejercicios favoritos"} function={ () => navigation.navigate('FavRecipes') } />
      {user.strRole === 'Admin' && (
          <>
            <Heading>Administración</Heading>
            <Button_lg name={"Administrar recetas"} function={ () => navigation.navigate('ManageRecipes') } />
            <Button_lg name={"Administrar usuarios"} function={ () => navigation.navigate('FavRecipes') } />
          </>
        )}
      <Button_lg name={"Cerrar sesión"} function={ handleLogout } />
    </View>
  );
};

export default MenuUser;