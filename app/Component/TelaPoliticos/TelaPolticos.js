import React, { useEffect, useState } from "react";
import { FlatList, View, Pressable } from "react-native";
import { Avatar, List, TextInput } from "react-native-paper";
import axios from "axios";
import Filtra from "../butaoFiltra/filtra";

const TelaPoliticos = ({ navigation }) => {
  const [politicos, setPoliticos] = useState([]);
  const [politicoFiltrado, setPoliticoFiltrado] = useState([]);
  const [text, setText] = useState("");
  const [siglaEstado, setSiglaEstado] = useState("");
  console.log(siglaEstado);
  // const iderlan = {
  //   email: "iderlandopovo@riolargo.al.leg.br",
  //   id: 40000,
  //   idLegislatura: 57,
  //   nome: "Iderlan Oliveira",
  //   siglaPartido:"PSB",
  //   siglaUf: "AL",
  //   uri: "https://dadosabertos.camara.leg.br/api/v2/deputados/220593",
  //   uriPartido:"https://dadosabertos.camara.leg.br/api/v2/partidos/37906",
  //   urlFoto: "https://media.licdn.com/dms/image/C4D03AQGMm74CmOz2lA/profile-displayphoto-shrink_800_800/0/1625110203335?e=2147483647&v=beta&t=mEqXE7NBHg80cMwCq222B4RgL9wQdDJCK6CsdB3kY4w"
  // };w

  useEffect(() => {
    (async () => {
      try {
        const { data } = await axios.get(
          "https://dadosabertos.camara.leg.br/api/v2/deputados?ordem=ASC&ordenarPor=nome",
          {}
        );
        console.log(data);

        //setPoliticos([...json.dados, iderlan]);
        setPoliticos(data.dados);
      } catch (error) {}
    })();
  }, []);

  useEffect(() => {
    const nomeBuscado = politicos.filter((item) =>
      item.nome.toLowerCase().includes(text.toLowerCase())
    );
    setPoliticoFiltrado(nomeBuscado);
  }, [text, politicos]);

  const ComponentFiltrados = () => {
    if (politicoFiltrado <= 0)
      <FlatList
        data={[]}
        keyExtractor={() => ""}
        renderItem={() => <View />} // Renderiza uma View vazia
      />;

    return (
      <FlatList
        data={politicoFiltrado}
        keyExtractor={({ id }) => id}
        renderItem={({ item }) => (
          <Pressable
            onPress={() => {
              navigation.navigate("telaPolitico", {
                chaveValor: item,
              });
            }}
          >
            <List.Item
              title={item.nome}
              description={`${item.siglaPartido}/${item.siglaUf}`}
              left={(props) => <Avatar.Image source={{ uri: item.urlFoto }} />}
            />
          </Pressable>
        )}
      />
    );
  };

  function lidaFiltrar({ siglaUfprops }) {
    const Filtrados = politicoFiltrado.filter(({ siglaUf }) => {
      return "PE" == siglaUf;
    });
    setPoliticoFiltrado(Filtrados);
  }

  return (
    <View style={{ flex: 1, padding: 24 }}>
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "row",
        }}
      >
        <TextInput
          style={{ backgroundColor: "#a3c152", flex: 1 }}
          activeUnderlineColor="black"
          label="Buscar por nome"
          // value={text}
          onChangeText={(text) => setText(text)}
        />
        <Filtra setSiglaEstado={setSiglaEstado} lidaFiltrar={lidaFiltrar} />
      </View>
      <ComponentFiltrados />
    </View>
  );
};

export default TelaPoliticos;
