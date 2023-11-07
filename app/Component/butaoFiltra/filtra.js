import { View } from "react-native";
import { Icon } from "react-native-elements";
import Select from "react-native-picker-select";
import siglaEstado from "../../siglaEstado.json";

const Filtra = ({ setSiglaEstado, lidaFiltrar }) => {
  return (
    <View>
      <Select
        // style={{
        //   viewContainer: {
        //     width: 50,
        //     height: 50,
        //   },
        // }}
        // Icon={() => <Icon name="filter" type="material-community" size={50} />}
        onValueChange={(value) => {
          setSiglaEstado(value);
          lidaFiltrar(value);
        }}
        items={siglaEstado}
      // placeholder={{ inputLabel: "", value: "", label: "", key: "" }}
      />
    </View>
  );
};
export default Filtra;
