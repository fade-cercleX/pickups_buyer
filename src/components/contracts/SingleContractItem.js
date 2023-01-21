import { StyleSheet, Image, View } from "react-native";
import React from "react";
import { SemiBold, Text } from "../../layout/Text";
import { style } from "../../styles";
import { Fontisto, MaterialIcons } from "react-native-vector-icons";
import { colors } from "../../styles/color";

const SingleContractItem = () => {
  return (
    <View style={{ ...style.box }}>
      <View style={{ ...style.row, ...style.mb_1 }}>
        <Image
          source={require("../../../assets/images/company.png")}
          style={{ width: 35, height: 35 }}
        />
        <SemiBold>&nbsp;Infinite Cercle Private Limited</SemiBold>
      </View>

      <View style={{ ...style.row,...style.s_b }} >
        <View>
          <View style={{ ...style.row }}>
            <Fontisto name={"date"} size={20} color={colors.primary} />
            <Text>&nbsp;100 Days remaining</Text>
          </View>

          <View style={{ ...style.row, ...style.mt_1 }}>
            <Fontisto name={"date"} size={20} color={colors.primary} />
            <Text style={{ color: colors.grey }}>
              &nbsp; COPPER-LDC NEWS PAPER-TAMIL
            </Text>
          </View>
        </View>
        <View style={styles.nextBtn}>
          <MaterialIcons
            name="navigate-next"
            size={22}
            color={colors.primary}
          />
        </View>
      </View>
    </View>
  );
};

export default SingleContractItem;

const styles = StyleSheet.create({
  nextBtn: {
    backgroundColor: "#F3ECF9",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: 45,
    height: 45,
    borderRadius:50
  },
});
