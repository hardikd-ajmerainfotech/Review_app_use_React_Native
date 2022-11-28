import * as Font from "expo-font";
import React, { useState } from "react";
import Home from "./screens/Home";
import AppLoading from "expo-app-loading";
import Navigator from './routes/HomeStack'

const getFonts = () =>
  Font.loadAsync({
    "nunito-regular": require("./assets/fonts/Nunito-Regular.ttf"),
    "nunito-bold": require("./assets/fonts/Nunito-Bold.ttf"),
  });

export  function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);
  if (fontsLoaded) {
    return <Navigator />;
  } else {
    return (
      <AppLoading 
      startAsync={getFonts} 
      onFinish={() => setFontsLoaded(true)} 
      onError={()=>console.log('error')}/>
    );
  }
}
export default App;