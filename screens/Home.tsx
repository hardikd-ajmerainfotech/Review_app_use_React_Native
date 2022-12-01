import React, { useState } from "react";
import { View, Text, StyleSheet,Button, FlatList, TouchableOpacity } from "react-native";
import { globalStyles } from "../styles/global";
import axios from "axios";

const Home = ({navigation}: any) => {
    const [responesdata, setResponesData] = useState();
    const [dataAdded, setDataAdded] = useState<Boolean>(false);
    const [reviews, setReviews] = useState([
      {
        title: "Zelda, Breath of Fresh Air",
        rating: 5,
        body: "lorem ipsum",
        key: "1",
      },
      {
        title: "Gotta Catch Them All (again)",
        rating: 4,
        body: "lorem ipsum",
        key: "2",
      },
      {
        title: 'Not So "Final" Fantasy',
        rating: 3,
        body: "lorem ipsum",
        key: "3",
      },
    ]);

      const GetPlayer: any = async () => {
        try {
          const response = await axios.get(
            "https://jsonplaceholder.typicode.com/comments"
          );
          if (response.status === 200) {
            console.log("response : ", response);
            setResponesData(response.data);
            setDataAdded(true);
            console.log("2");
          }
        } catch (error) {
          console.log(error);
          console.log("1");
        }
      };
  return (
    <View style={globalStyles.container}>
      <FlatList
        data={responesdata}
        renderItem={({ item }: any) => (
          <TouchableOpacity
            onPress={() => navigation.navigate("ReviewDetails", item)}
            style={{marginVertical: 10}}
          >
            <Text style={[globalStyles.titleText]}>
              Name : {item.name}
            </Text>
            <Text style={[globalStyles.titleText]}>
              Email : {item.email}
            </Text>
          </TouchableOpacity>
        )}
      />
      <Button title="get data" onPress={GetPlayer} />
    </View>
  );
};

export default Home;
//useeffect code snippet?l