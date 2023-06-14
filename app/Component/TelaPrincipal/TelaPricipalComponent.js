import { View, StyleSheet } from "react-native";
import { Text, Button } from "react-native-paper";

const TelaPrincipalComponent = ({ navigation }) => {
   return (
      <View style={estilo.conteiner}>

         <View style={estilo.info}>

            <View style={estilo.logo}>
               <Text style={estilo.titulo}>PROCURALITICO</Text>
            </View>

            <View style={estilo.butaoCotainer}>
               <View >

               <View style={estilo.butao}>

                  <Button textColor="white" mode onPress={() => navigation.navigate("cadastro")}>Criar uma conta</Button>
               </View>

                  <View style={estilo.butao}>
                  <Button textColor="white" onPress={() => navigation.navigate("login")}>Entrar com uma conta</Button>

                  </View>

                  <View style={estilo.butao}>
                     <Button mode="container" textColor="white" onPress={() => navigation.navigate("entrarVisitante")}>Entrar como visitante</Button>
                  </View>
               </View>
            </View>

         </View>

      </View>

   )
}
const estilo = StyleSheet.create({
   conteiner: {
      flex: 1,
      backgroundColor: '#DCDCDC',
      justifyContent: 'center',

   },
   info: {
      backgroundColor: 'white',
      height: '50%',
      width: '100%',
      alignItems: 'center',


   },

   butao: {
      backgroundColor: '#19A7CE',
      padding: 10,
      width: '100%',
      alignItems: 'center',
      Color: 'white',
      marginVertical:3,
   },

   butaoCotainer: {
      width: '100%',
      flex: 2,

   },

   logo: {
      flex: 1,

   },

   titulo: {
      fontSize: 30,
      color: 'black',
      fontWeight: 'bold',
      textAlign: 'center',
      marginBottom: 10,
      margin:13

   }
})

export default TelaPrincipalComponent