import { StyleSheet, View, FlatList } from "react-native";
import React from "react";
import { SemiBold, Text } from "../../layout/Text";
import { colors } from "../../styles/color";
import { style } from "../../styles";
import { AntDesign, Feather } from "react-native-vector-icons";
import { Button } from "../../layout/Button";

const SelectDriver = () => {
  return (
    <View style={styles.acceptPickupModal}>
      <View style={{...style.row,...style.s_b,...style.mb_2}}>
        <View>
          <SemiBold style={{ color: colors.primary }}>Accept Pickup</SemiBold>
          <SemiBold style={{ fontSize: 15, color:colors.grey }}>
            Select Driver
          </SemiBold>
        </View>
        <AntDesign
          name="adduser"
          color={colors.primary}
          size={22}
          style={styles.icon}
        />
      </View>

      <View style={{ ...style.row, ...style.s_b, ...style.mv_1 }}>
        <View style={{ ...style.row }}>
          <Feather
            name="user"
            color={colors.primary}
            size={24}
            style={{ ...styles.userIcon, ...style.mr_1 }}
          />
          <View>
            <Text>Fade_H_Ahmad</Text>
            <Text style={{ color: colors.grey }}>fade@cerclex.com</Text>
          </View>
        </View>

        <View style={styles.assign_btn}>
          <Text style={{ color: colors.primary }}>Assign</Text>
        </View>
      </View>

      <View style={{ ...style.row, ...style.s_b, ...style.mv_1 }}>
        <View style={{ ...style.row }}>
          <Feather
            name="user"
            color={colors.primary}
            size={24}
            style={{ ...styles.userIcon, ...style.mr_1 }}
          />
          <View>
            <Text>Fade_H_Ahmad</Text>
            <Text style={{ color: colors.grey }}>fade@cerclex.com</Text>
          </View>
        </View>
        <View style={styles.assign_btn}>
          <Text style={{ color: colors.primary }}>Assign</Text>
        </View>
      </View>
      <Button>
        <SemiBold style={{ fontSize: 20 }}>Next</SemiBold>
      </Button>
    </View>
  );
};

export default SelectDriver;

const styles = StyleSheet.create({
  acceptPickupModal: {
    backgroundColor: colors.white,
    paddingHorizontal: 15,
    paddingVertical: 16,
    borderTopEndRadius: 12,
    borderTopLeftRadius: 12,
  },
  icon: {
    backgroundColor: colors.secondary,
    paddingHorizontal: 8,
    paddingVertical: 8,
    borderRadius: 25,
    borderColor: colors.primary,
    borderWidth: 1,
  },
  assign_btn: {
    backgroundColor: "#fff",
    width: 80,
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 5,
    borderColor: colors.primary,
    borderWidth: 1,
    alignItems: "center",
  },
  userIcon: {
    backgroundColor: colors.secondary,
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderRadius: 25,
  },
});
