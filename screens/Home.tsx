import React, { useState } from "react";
import { View, Text, StyleSheet,Button } from "react-native";
import { globalStyles } from "../styles/global";

const Home = ({navigation}: any) => {
    const [reviews, setReviews] = useState([
        
    ])
  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.titleText}>Home Screen</Text>
    </View>
  );
};

export default Home;
