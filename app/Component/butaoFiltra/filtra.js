import { View } from "react-native";
import { Icon } from "react-native-elements";
import Select from "react-native-picker-select";

const Filtra = ({ setSiglaEstado, lidaFiltrar }) => {
  return (
    <View>
      <Icon
        name="filter"
        type="material-community"
        size={50}
        onPress={() => {
          console.log("oi");
          //   setSiglaEstado("PE");
          return lidaFiltrar({});
        }}
      />
      {/* <Select
        items={[{ label: "estado", value: "estado" }]}
        onValueChange={(value) => console.log(value)}
      /> */}
    </View>
  );
};
export default Filtra;
