import { StyleSheet, View } from "react-native";
import React from "react";
import { Ionicons, Feather, MaterialIcons } from "react-native-vector-icons";
import { SemiBold, Text } from "../../layout/Text";
import { colors } from "../../styles/color";
import { style } from "../../styles";

const SinglePickup = () => {
  return (
    <View
      style={{
        ...style.ph_1,
        ...style.pv_1,
        ...styles.SinglePickup,
      }}
    >
      <View style={{ ...style.row, ...style.s_b, ...style.mb_1 }}>
        <SemiBold style={{ fontSize: 16 }}>COPPER-LDC</SemiBold>
        <Text style={{ color: colors.grey }}>Sat Dec 24 2022</Text>
      </View>

      <View style={{ ...style.row, ...style.start }}>
        <Ionicons
          name="location-outline"
          size={22}
          color={colors.primary}
          style={{ ...style.mr_1 }}
        />
        <Text style={{ width: "80%" }}>
          WXHC+5G3, Madukkarai, Tamil Nadu 641021, India
        </Text>
      </View>

      <View style={{ ...style.row }}>
        <Feather
          name="truck"
          size={22}
          color={colors.primary}
          style={{ ...style.mr_1 }}
        />
        <Text>2</Text>
      </View>

      <View style={{ ...style.row, justifyContent: "flex-end", ...style.mt_1 }}>
        <View style={styles.ignoreBtn}>
          <Text style={{ color: colors.primary }}>Ignore</Text>
        </View>

        <View style={styles.acceptBtn}>
          <Text style={{ color: colors.white }}>Accept Pickup</Text>
        </View>
      </View>
    </View>
  );
};

export default SinglePickup;

const styles = StyleSheet.create({
  acceptBtn: {
    backgroundColor: colors.primary,
    paddingHorizontal: 18,
    paddingVertical: 10,
    borderRadius: 5,
    borderColor: colors.primary,
    borderWidth: 1,
  },
  ignoreBtn: {
    backgroundColor: colors.white,
    paddingHorizontal: 18,
    paddingVertical: 10,
    borderRadius: 5,
    borderColor: colors.primary,
    borderWidth: 1,
    marginHorizontal: 14,
  },
  SinglePickup: {
    marginVertical: 4,
    backgroundColor: "#ffffff",
    borderRadius: 7,
    shadowColor: "rgba(230,230,230,0.025)",
    shadowOpacity: 1.9,
    elevation: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    borderWidth:1,
    borderColor:"#f2f2f2",
    
  },
});
