import React, { useState } from "react";
import { FormControl, FormControlLabel, FormControlLabelText, Heading, Input, InputField, SafeAreaView, ScrollView } from "@gluestack-ui/themed";
import ImageHeading from "../../components/ImageHeading";
import Image from "../../assets/resource/logoSF.png";
import { useDispatch, useSelector } from "react-redux";
import { getUser, setUser, setUserEdit, updateEmailPw } from "../../src/lib/Api/features/userSlice";
import { useNavigation } from "@react-navigation/native";
import Button_lg from "../../components/Button_lg";

export default function EditEmailUser (){

    const navigation = useNavigation();
    const dispatch = useDispatch();
    const {user} = useSelector((state) => state.user);
    const id = user._id;
    const strEmailCopy = user.strEmail;

    const [strEmail, setStrEmail] = useState(user.strEmail);
    const [strPassword, setStrPassword] = useState("");
    const [strPasswordConfirmation, setStrPasswordConfirmation] = useState("");




    const handleUpdateEmailPw = async () => {
        const data = {
            strEmail: strEmail,
            strPassword: strPassword,
            strPasswordConfirmation: strPasswordConfirmation
        };
        console.log('handleUpdateEmaoilPw data => ', data);
        dispatch(updateEmailPw({id, data}));
        navigation.navigate('UserInfo');
    }

    return(
        <SafeAreaView>
            <ImageHeading img={Image} alt={"Imagen"} />
            <Heading>Cambiar correo y contraseña</Heading>
            <FormControl>
                <FormControlLabel>
                    <FormControlLabelText>Correo</FormControlLabelText>
                </FormControlLabel>
                <Input>
                    <InputField value={strEmail} onChangeText={(text: string) => setStrEmail(text)} />
                </Input>
                <FormControlLabel>
                    <FormControlLabelText>Nueva contraseña</FormControlLabelText>
                </FormControlLabel>
                <Input>
                    <InputField value={strPassword} onChangeText={(text: string) => setStrPassword(text)} />
                </Input>
                <FormControlLabel>
                    <FormControlLabelText>Contraseña actual</FormControlLabelText>
                </FormControlLabel>
                <Input>
                    <InputField value={strPasswordConfirmation} onChangeText={(text: string) => setStrPasswordConfirmation(text)} />
                </Input>
            </FormControl>
            <Button_lg name="Guardar" function={handleUpdateEmailPw} />
        </SafeAreaView>
    );
}