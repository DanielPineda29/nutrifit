import React, { useEffect } from "react";
import UserInfo from "../../components/user/UserInfo";
import { SafeAreaView } from "@gluestack-ui/themed";
import { useDispatch, useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import { getUser } from "../../src/lib/Api/features/userSlice";

export default function UserData() {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user);
  const navigation = useNavigation();

  useEffect(() => {
    // Llamar a la acción getUser al montar el componente
    dispatch(getUser(user.strEmail));
  }, []);

  const handleEdit = (id: string, title: string) => {
    navigation.navigate("EditUser", { id, title });
  };

  const handleEditEmail = () => {
    navigation.navigate("EditEmailUser");
  };

  return (
    <SafeAreaView>
      <UserInfo {...user} 
      onPress={() => handleEdit(user._id,"Editar mis datos")} 
      onPressEmail={handleEditEmail}
      />
    </SafeAreaView>
  );
}
