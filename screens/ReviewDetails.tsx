import React,{useState} from "react";
import { View, Text, StyleSheet,Button,TouchableOpacity,FlatList } from "react-native";
import { globalStyles } from "../styles/global";

const ReviewDetails = ({navigation}: any) => {
    
  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.titleText}>{navigation.getParam("title")}</Text>
      <Text style={globalStyles.titleText}>{navigation.getParam("body")}</Text>
      <Text style={globalStyles.titleText}>
        {navigation.getParam("rating")}
      </Text> 
    </View>
  );
};

export default ReviewDetails;

