import React from 'react';
import { View, Text} from 'react-native';
import ImageHeading from '../../components/ImageHeading';

import IMAGE from '../../assets/resource/configuracion2.png';

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

    const handleFavRecipes = (idUser: string) => {
      navigation.navigate('FavRecipes', {idUser})
    }

  return (
    <View>
      <ImageHeading style={{ width: 50, height: 50 }} img={IMAGE} alt={"Datos de usuario"} />
      
      <Heading>Configuración</Heading>
      <Button_lg name={"Mis datos"} function={ () => navigation.navigate('UserInfo') } />
      <Heading>Favoritos</Heading>
      <Button_lg name={"Mis recetas favoritas"} function={ () => handleFavRecipes(user._id) } />
      {user.strRole === 'Admin' && (
          <>
            <Heading>Administración</Heading>
            <Button_lg name={"Administrar recetas"} function={ () => navigation.navigate('ManageRecipes') } />
          </>
        )}
      <Button_lg name={"Cerrar sesión"} function={ handleLogout } />
    </View>
  );
};

export default MenuUser;