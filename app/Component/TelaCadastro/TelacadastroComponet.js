import axios from "axios";
import { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { TextInput } from "react-native-paper";

const TelaCadastroComponent = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [senhaOk, setSenhaOk] = useState("");
  const [mostrarSenha, setMostrarSenha] = useState(true);
  const [confirmaSenha, setConfirmaSenha] = useState(true);
  const regex = /^\w+([.-]?\w+)@\w+([.-]?\w+)(.\w\w+)+$/;

  const dataUser = { email: email, senha: senha, confirmaSenha: senhaOk };
  const visibilidade = () => {
    mostrarSenha === true ? setMostrarSenha(false) : setMostrarSenha(true);
  };
  const visibilidadeDeConfirmacao = () => {
    confirmaSenha === true ? setConfirmaSenha(false) : setConfirmaSenha(true);
  };

  const verificarCadastro = async () => {
    if (email === "" || senha === "" || senhaOk === "") {
      console.log("preencha os campos corretamente");
    } else if (!regex.test(email)) {
      console.log("email is not a valid email");
    } else if (senha === senhaOk) {
      const result = await axios
        .post("http://localhost:3500/api/criaruser", {
          data: dataUser,
        })
        .then((response) => response);
      console.log(result);
      if (result.data.status) {
        navigation.navigate("PROCURALITICO");
      }
    }
  };

  return (
    <View style={estilo.container}>
      <View style={estilo.posImg}>
        <Image style={estilo.img} source={require("../../img/imgLogo.png")} />
      </View>
      <Text style={estilo.titulo}>PROCURALITICO</Text>

      <View style={estilo.emailSenha}>
        <TextInput
          label="Email"
          mode="flat"
          left={<TextInput.Icon icon="email" />}
          onChangeText={(texto) => setEmail(texto)}
          default={email}
        ></TextInput>
      </View>
      <View style={estilo.emailSenha}>
        <TextInput
          label="Senha"
          mode="flat"
          left={<TextInput.Icon icon="lock" />}
          right={<TextInput.Icon icon="eye" onPress={visibilidade} />}
          onChangeText={(texto) => setSenha(texto)}
          default={senha}
          secureTextEntry={mostrarSenha}
        />
      </View>

      <View style={estilo.emailSenha}>
        <TextInput
          label="Confirma senha"
          mode="flat"
          left={<TextInput.Icon icon="lock" />}
          right={
            <TextInput.Icon icon="eye" onPress={visibilidadeDeConfirmacao} />
          }
          onChangeText={(texto) => setSenhaOk(texto)}
          default={senhaOk}
          secureTextEntry={confirmaSenha}
        />
      </View>

      <TouchableOpacity
        style={estilo.bordaButao}
        onPress={() => verificarCadastro()}
      >
        <Text style={estilo.butao}>CADASTRA</Text>
      </TouchableOpacity>
    </View>
  );
};
const estilo = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#45BA5F",
    justifyContent: "center",
    alignItems: "center",
  },

  titulo: {
    fontSize: 30,
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 15,
    top: -30,
  },

  emailSenha: {
    width: 393,
    height: 110,
    marginLeft: 1,
    fontSize: 16,
  },
  bordaButao: {
    margin: 26,
    padding: 20,
    marginTop: 0,
  },
  posImg: {
    alignItems: "center",
    top: -80,
  },
  butao: {
    color: "white",
    fontSize: 16,
    padding: 13,
    width: 350,
    fontWeight: "bold",
    textAlign: "center",
    top: 27,
    backgroundColor: "black",
    margin: 3,
  },

  posImg: {
    alignItems: "center",
    top: -27,
  },
  img: {
    width: 70,
    height: 100,
  },
});

<<<<<<< HEAD
export default TelaCadastroComponent;
=======
    emailSenha: {
        width: 393,
        height: 110,
        marginLeft: 10,
        fontSize: 16,
    },
    bordaButao: {
        
        margin: 26,
        padding: 20,
        marginTop: 0
    },
        posImg:{
        alignItems:'center',
        top:-80,
    },
    butao: {
        color: 'white',
        fontSize: 16,
        padding: 13,
        width: 350,
        fontWeight: 'bold',
        textAlign: 'center',
        top: 27,
        backgroundColor: 'black',
        margin: 3,  
    },
   
    posImg:{
        alignItems:'center',
        top:-27,
    },
    img: {
        width: 70,
        height:100,
    }

})


export default TelaCadastroComponent
>>>>>>> parent of 5e7b1d9 (alteração na margin)
