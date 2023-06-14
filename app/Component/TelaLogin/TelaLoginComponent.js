import { useState } from "react";
import { SafeAreaView, View, Text, StyleSheet, TouchableOpacity } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';
import { TextInput } from 'react-native-paper'


const TelaLoginComponent = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    return (




        <View style={estilo.container}>


            <Text style={estilo.titulo}>PROCURALITICO</Text>

            <View style={estilo.emailSenha}>
                <TextInput
                    label='Email'
                    mode='flat'
                    left={<TextInput.Icon icon="email" />}

                    onChangeText={(texto) => setEmail(texto)}
                    defaultValue={email}>

                </TextInput>
            </View>

            <View style={estilo.emailSenha}>

                <TextInput
                    label='Senha'
                    placeholder=""
                    right={<TextInput.Icon icon="eye" Color="red" />}
                    left={<TextInput.Icon icon="lock" />}
                    onChangeText={(texto) => setSenha(texto)}
                    defaultValue={senha}>
                </TextInput>

                <View style={estilo.entraVisitCriar}>
                    <TouchableOpacity onPress={() => navigation.navigate("telaPoliticos")}>
                        <Text style={estilo.entrarVstt}>Entrar como visitante</Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => navigation.navigate("Cadastro")}>
                        <Text style={estilo.criarCnt}>Criar uma conta</Text>
                    </TouchableOpacity>
                </View>

            </View>
            <TouchableOpacity style={estilo.bordaButao} onPress={() => navigation.navigate("telaPoliticos")}>
                <Text style={estilo.butao}>LOGIN</Text>
            </TouchableOpacity>

        </View>




    )

}

const estilo = StyleSheet.create({



    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#45BA5F',
        height: '100%',
        width: '100%',

    },

    titulo: {
        fontSize: 30,
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
        margin: 0,
        top: -110
    },

    title: {

        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 28,
        margin: 13,
    },

    emailSenha: {
        width: 393,
        height: 110,
        marginLeft: 10,
        fontSize: 16,
    },



    butao: {
        color: 'white',
        fontSize: 16,
        padding: 13,
        width: 350,
        fontWeight: 'bold',
        textAlign: 'center',
        top: 27,
        backgroundColor: '#19451F',
        margin: -10,
        marginTop: 0
    },
    bordaButao: {
        margin: 26,
        padding: 20,
        marginTop: 0
    },
    entrarVstt: {
        color: 'white',
        width: 145,
      
    },
    criarCnt: {
        color: 'white',
        width: 110,
       
    },
    entraVisitCriar:{
        padding:17,
        flexDirection:'row',
        justifyContent:'space-between'
    }
})


export default TelaLoginComponent;