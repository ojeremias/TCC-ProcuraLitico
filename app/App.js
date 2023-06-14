import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import TelaPrincipalComponent from "./Component/TelaPrincipal/TelaPricipalComponent";
import TelaLoginComponent from "./Component/TelaLogin/TelaLoginComponent";
import TelaCadastroComponent from "./Component/TelaCadastro/TelacadastroComponet";
import TelaPoliticos from "./Component/TelaPoliticos/TelaPolticos";
import TelaPolitico from "./Component/TelaPolitico/TelaPolitico"

import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator inicialRouterName="">
        <Stack.Screen
          name="PROCURALITICO"
          component={TelaLoginComponent}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="Cadastro" component={TelaCadastroComponent} />
        <Stack.Screen name="telaPoliticos" component={TelaPoliticos} />
        <Stack.Screen name="telaPolitico" component={TelaPolitico}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
