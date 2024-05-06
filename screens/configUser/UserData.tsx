import React from "react";
import UserInfo from "../../components/user/UserInfo";
import { SafeAreaView } from "@gluestack-ui/themed";
import { useDispatch, useSelector } from "react-redux";

export default function UserData() {
  const dispatch = useDispatch();
  const {user} = useSelector(state => state.user);

    const handleEdit = () => {
        console.log(user);
    }

  return (
    <SafeAreaView>
      <UserInfo 
        _id={user._id}
        strName={user.strName}
        strLastname={user.strLastname}
        strEmail={user.strEmail}
        numAge={user.numAge}
        numHeight={user.numHeight}
        strSexo={user.strSexo}
        numWeight={user.numWeight}
        strActivity={user.strActivity}
        numDailyCalories={user.numDailyCalories}
        onPress={handleEdit}
      />
    </SafeAreaView>
  );
}
