import React from "react";
import { View, ActivityIndicator } from "react-native";
import { useFonts } from "expo-font";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import SignUpScreen from "../screens/SignUpScreen";
import LoginScreen from "../screens/LoginScreen";
import BlogVideoScreen from './src/screens/BlogVideoScreen';

const Stack = createStackNavigator();

export default function App() {
  // Carregando a fonte Pacifico
  const [fontsLoaded] = useFonts({
    Pacifico: require("../assets/fonts/Pacifico-Regular.ttf"), // Certifique-se de que o caminho está correto
  });

  // Exibe um indicador de carregamento enquanto a fonte não é carregada
  if (!fontsLoaded) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" color="#F05080" />
      </View>
    );
  }

  // Configuração da navegação
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SignUp">
        <Stack.Screen
          name="SignUp"
          component={SignUpScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{ headerShown: false }}
        />
        / Dentro do NavigationContainer / Stack.Navigator
<Stack.Screen name="BlogVideo" component={BlogVideoScreen} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}


