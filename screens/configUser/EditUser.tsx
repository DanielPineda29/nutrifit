import React from "react";
import UserInfo from "../../components/user/UserInfo";
import { SafeAreaView, ScrollView } from "@gluestack-ui/themed";
import { useDispatch, useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import UserForm from "../../components/user/UserForm";

export default function EditUser() {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user);
  const navigation = useNavigation();

  const handleEdit = () => {
    navigation.navigate("");
  };

  return (
    <SafeAreaView>
      <ScrollView>
        <UserForm {...user} />
      </ScrollView>
    </SafeAreaView>
  );
}
