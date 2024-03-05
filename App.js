import { StatusBar } from "expo-status-bar";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { StyleSheet, Text, TextInput, View } from "react-native";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import { Header } from "react-native/Libraries/NewAppScreen";
import Stackroutes from "./src/pages/Stackroutes";
const Tab = createBottomTabNavigator();

function HomeScreen() {
  return <></>;
}

function SettingsScreen() {
  return (
    <>
      <Text className="mt-5 text-center text-3xl font-semibold text-fuchsia-600">
        Setting
      </Text>
    </>
  );
}

function History() {
  return (
    <>
      <View className='flex-1 '>
        
        <Text className="mt-5 text-center text-3xl font-semibold text-fuchsia-600">
          History
        </Text>


        <View className='mx-2'>


        <TextInput  className='border bg-white border-slate-200 text-gray-500 px-2 py-2 mt-2 placeholder:font-mono text-lg' placeholder=" Search by name,number or UPI ID"/>
        </View>

      </View>
    </>
  );
}
export default function App() {
  // return (
  //   <NavigationContainer>
  //     <Tab.Navigator>
  //       <Tab.Screen
  //         name="Home Screen"
  //         component={HomeScreen}
  //         options={{ headerShown: false }}
  //       />
  //       <Tab.Screen
  //         name="Settings"
  //         component={SettingsScreen}
  //         options={{ headerShown: false }}
  //       />
  //       <Tab.Screen
  //         name="History"
  //         component={History}
  //         options={{
  //           headerShown: false,
  //           tabBarIcon: ({ tintColor }) => (
  //             <Ionicons name="ios-home" color={tintColor} size={25} />
  //           ),
  //         }}
  //       />
  //     </Tab.Navigator>
  //   </NavigationContainer>
  // );

  return(
    <Stackroutes/>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
