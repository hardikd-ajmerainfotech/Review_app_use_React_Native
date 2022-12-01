import React,{useState} from "react";
import { View, Text, StyleSheet,Button,TouchableOpacity,FlatList } from "react-native";
import { globalStyles } from "../styles/global";

const ReviewDetails = ({navigation}: any) => {
    
  return (
    <View style={[globalStyles.container,{marginVertical: 10}]}>
      <Text style={globalStyles.titleText}>
        PostId : {navigation.getParam("postId")}
      </Text>
      <Text style={globalStyles.titleText}>Id : {navigation.getParam("id")}</Text>
      <Text style={globalStyles.titleText}>Name: {navigation.getParam("name")}</Text>
      <Text style={globalStyles.titleText}>Email : {navigation.getParam("email")}</Text>
      <Text style={globalStyles.titleText}>Body : {navigation.getParam("body")}</Text>
    </View>
  );
};

export default ReviewDetails;

