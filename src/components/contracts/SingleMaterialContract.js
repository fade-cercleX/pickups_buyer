import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { style } from "../../styles";
import { colors } from "../../styles/color";
import { MaterialIcons ,Feather} from "react-native-vector-icons";

const SingleMaterialContract = () => {
  return (
    <View style={{ ...style.box , width:"47%" }}>
      <View style={{ ...style.row ,...style.s_b}}>
        <View>
          <Text style={{ color: colors.grey }}>WASTE</Text>
          <Text>Copper</Text>
        </View>

        <View style={styles.nextBtn}>
          <Feather
            name="edit-2"
            size={15}
            color={colors.primary}
          />
        </View>
      </View>

      <Text style={{ color: colors.grey, ...style.mt_1 }}>PRICE(VARIABLE)</Text>
      <Text>₹23/kg</Text>
    </View>
  );
};

export default SingleMaterialContract;

const styles = StyleSheet.create({
  nextBtn: {
    backgroundColor: "#F3ECF9",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: 35,
    height: 35,
    borderRadius: 50,
  },
});
