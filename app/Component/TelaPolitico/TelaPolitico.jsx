import React, { useEffect, useState } from "react";
import {
  Text,
  Image,
  StyleSheet,
  View,
  FlatList,
  ScrollView,
} from "react-native";
import { List } from "react-native-paper";
import { GASTOS_FAKE } from "../Utils/DataFake";
import Loading from "../Loading/Loading";

const TelaPolitico = ({ route }) => {
  //  console.log(route.params.chaveValor)
  /* console.log(route); */
  const dadosPolitico = route?.params?.chaveValor;
  /* console.log(dadosPolitico); */
  //console.log(dadosPolitico.uri.dados.gabinete.email);

  const [data, setData] = useState([]);
  const [selecionados, setSelecionados] = useState([]);
  const valorTotal = 0;
  let acumulador = 0;

  data?.map((gasto) => {
    gasto.valorDocumento;
    let valorIndividual = gasto.valorDocumento;
    acumulador += valorIndividual;
  });

  // Substituido pela linha 26 à 40 | Se utilizando de IIFE
  // const showMoreData = async () => {
  //   try {
  //     const response = await fetch(
  //       `https://dadosabertos.camara.leg.br/api/v2/deputados/${dadosPolitico.id}/despesas`
  //     );
  //     const json = await response.json();
  //     //console.log(json.dados);
  //     setData(json.dados);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };

  useEffect(() => {
    //Utilizando de IIFE -> Immediately Invoked Function Expression
    (async () => {
      try {
        const response = await fetch(
          `https://dadosabertos.camara.leg.br/api/v2/deputados/${dadosPolitico.id}/despesas`
        );
        const json = await response.json();
        //console.log(json.dados);

        if (json?.dados) setData(json.dados);
        else {
          setData(GASTOS_FAKE);
        }
      } catch (error) {
        console.error("error:" + error);
      }
    })();
  }, []);

  // const gastoTotal = ()=>{

  // }
  // gastoTotal()
  if (data.length > 0) {
    return (
      <View style={{ flex: 1 }}>
        <View style={style.content}>
          <View style={style.contentPrimary}>
            <View style={{ height: 200, width: 200, alignItems: "center" }}>
              <Image
                style={style.image}
                source={{ uri: `${dadosPolitico.urlFoto}` }}
              />
            </View>
            <Text style={style.title}> {dadosPolitico.nome}</Text>
            <Text style={style.description}>
              Partido: {dadosPolitico.siglaPartido}
            </Text>
            <Text style={style.description}> {dadosPolitico.email}</Text>
          </View>
        </View>
        <ScrollView>
          {data?.map((despesa, i) => (
            <View stlye={style.contentSecondary} key={i}>
              <View style={style.caixasInform}>
                <Text style={style.tipoDespesa}>{despesa.tipoDespesa}</Text>

                <View style={style.descriptionDespesa}>
                  <Text>
                    {despesa.ano} / {despesa.mes}{" "}
                  </Text>

                  <Text style={style.valoresDespesa}>
                    R${despesa.valorDocumento}
                  </Text>
                </View>
              </View>
            </View>
          ))}
          <View>
            <Text style={style.total}>
              Gasto total:{" "}
              <Text style={style.valoresDespesa}>
                R${acumulador.toFixed(2)}
              </Text>
            </Text>
          </View>
        </ScrollView>
      </View>
    );
  } else {
    return (
      <View style={{ flex: 1 }}>
        <View style={style.content}>
          <View>
            <Image
              style={style.image}
              source={{ uri: `${dadosPolitico.urlFoto}` }}
            />
          </View>

          <View style={{ flex: 1 }}>
            <Loading />
          </View>
        </View>
      </View>
    );
  }
};
const style = StyleSheet.create({
  image: {
    width: 140,
    height: 165,
    alignItems: "center",
    bottom: -25,
    borderRadius: 15,
  },

  content: {
    flexDirection: "column",
    justifyContent: "center",
    height: 250,
    flexDirection: "column",
    backgroundColor: "45BA5F",
  },
  contentPrimary: {
    justifyContent: "center",
    alignItems: "center",
    bottom: 10,

  },
  contentSecondary: {

    flex: 1,
  },
  caixasInform: {
    borderColor: "#fff",
    margin: 3,
    padding: 3,
    borderWidth: 5,
    borderColor: "#fff",
    borderStyle: "solid",
    borderRadius: 13,
  },
  tipoDespesa: {
    textTransform: "uppercase",
    marginLeft: 10,
  },
  descriptionDespesa: {
    marginLeft: 10,
    justifyContent: "space-between",
    flexDirection: "row",
  },
  valoresDespesa: {
    color: "green",
    fontSize: 17,
    marginRight: 17,
  },
  total: {
    borderWidth: 5,
    fontSize: 27,
    borderColor: "#fff",
    margin: 5,
    borderRadius: 12,
    marginRight: 1,
  },
  loading: {
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontWeight: "bold",
  },
  bordaDiscricao: {
    fontWeight: 700,
  },
});
export default TelaPolitico;
