import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "./Screens/LoginScreen";
import RegisterScreen from "./Screens/RegisterScreen";
import HomeScreen from "./Screens/HomeScreen";
import AddChatScreen from "./Screens/AddChatScreen";
import ChatScreen from "./Screens/ChatScreen";
const Stack = createNativeStackNavigator();

const globalScreenOptions = {
  headerStyle: { backgroundColor: "#2c6BED" },
  headerTitleStyle: { color: "white" },
  headerTintColor: "white",
};

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        // initialRouteName="Home"
        screenOptions={globalScreenOptions}
      >
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{ animationEnabled: false, headerTitleAlign: "center" }}
        />
        <Stack.Screen
          name="Register"
          component={RegisterScreen}
          options={{ animationEnabled: false, headerTitleAlign: "center" }}
        />
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ animationEnabled: false, headerTitleAlign: "Left" }}
        />
        <Stack.Screen
          name="AddChat"
          component={AddChatScreen}
          options={{ animationEnabled: false, headerTitleAlign: "center" }}
        />
        <Stack.Screen
          name="Chat"
          component={ChatScreen}
          options={{ animationEnabled: false, headerTitleAlign: "center" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
