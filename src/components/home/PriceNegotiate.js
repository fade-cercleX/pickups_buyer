import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { colors } from "../../styles/color";
import { style } from "../../styles";

const PriceNegotiate = () => {
  return (
    <View style={styles.boxStyle}>
      <Text>
        Price for COPPER-LDC has been requested to be changed from ₹14 to ₹12.5{" "}
      </Text>
      <View style={{ ...style.row, justifyContent: "flex-end", ...style.mt_1 }}>
        <View style={styles.ignoreBtn}>
          <Text style={{ color: colors.primary }}>Negotiate</Text>
        </View>

        <View style={styles.acceptBtn}>
          <Text style={{ color: colors.white }}>Accept</Text>
        </View>
      </View>
    </View>
  );
};

export default PriceNegotiate;

const styles = StyleSheet.create({
  boxStyle: {
    backgroundColor: "#fff",
    paddingHorizontal: 10,
    paddingVertical: 16,
    shadowColor: "rgba(230,230,230,0.025)",
    shadowOpacity: 1.9,
    elevation: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    marginHorizontal: 7,
    marginVertical: 4,
    borderRadius: 7,
    borderColor: colors.primary,
    borderLeftWidth: 5,
  },
  acceptBtn: {
    backgroundColor: colors.primary,
    paddingHorizontal: 18,
    paddingVertical: 8,
    borderRadius: 5,
    borderColor: colors.primary,
    borderWidth: 1,
  },
  ignoreBtn: {
    backgroundColor: colors.white,
    paddingHorizontal: 18,
    paddingVertical: 8,
    borderRadius: 5,
    borderColor: colors.primary,
    borderWidth: 1,
    marginHorizontal: 14,
  },
});
