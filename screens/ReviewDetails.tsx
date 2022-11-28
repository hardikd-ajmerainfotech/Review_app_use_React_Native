import React from "react";
import { View, Text, StyleSheet,Button } from "react-native";
import { globalStyles } from "../styles/global";

const ReviewDetails = ({navigation}: any) => {
    const pressHandler = ()=>{
        navigation.goBack();
    }
  return (
    <View style={globalStyles.container}>
      <Text>Review Details</Text>
      <Button title="back to home screen" onPress={pressHandler}/>
    </View>
  );
};

export default ReviewDetails;

