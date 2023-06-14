import { useState } from "react";
import { View, TextInput, Text, StyleSheet,TouchableOpacity } from "react-native";


const TelaCadastroComponent = ({ navigation }) => {
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')
    const [senhaOk, setSenhaOk] = useState('')

    return (
        <View style={estilo.container}>
            <View style={estilo.dados}>
                <Text style={estilo.titulo}>PROCURALITICO</Text>
                
                <View style={estilo.emailSenha}>
                    <Text style={estilo.title}>EMAIL</Text>
                    <TextInput
                        placeholder="Digite seu email"
                        onChangeText={(texto) => setEmail(texto)}
                        default={email}>
                    </TextInput>
                      
                      </View>
                    <View style={estilo.emailSenha}>
                        <Text style={estilo.title}>SENHA</Text>
                        <TextInput
                            placeholder="Digite uma senha"
                            onChangeText={(texto) => setSenha(texto)}
                            default={senha}>
                        </TextInput>
                            </View>

                        <View style={estilo.emailSenha}>
                            <Text style={estilo.title}>CONFIRME A SENHA</Text>
                            <TextInput
                                placeholder="Repita a senha"
                                onChangeText={(texto) => setSenhaOk(texto)}
                                default={senhaOk}>
                            </TextInput>
                            </View>

                        <TouchableOpacity style onPress={() => navigation.navigate("login")}>
                        <Text style={estilo.butao}>Iniciar Sessão</Text>
                        </TouchableOpacity>
                   
                
            </View>
        </View>
    )

}
const estilo = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#DCDCDC',
        justifyContent: 'center',

    },

    dados: {
        backgroundColor: 'white',
        height: '55%',
        width: '96%',
        marginLeft: 8
        
        
        
        

    },

    titulo: {
        fontSize: 30,
        color: 'black',
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 15,
        margin:13

    },

    title: {

        color: 'black',
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 28,
        margin:13
    },

    emailSenha: {
        borderBottomWidth: 2,
        height: 85,
        marginLeft:10,
        fontSize: 16,
        

    }
})


export default TelaCadastroComponent