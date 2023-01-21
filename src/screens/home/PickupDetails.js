import { StyleSheet, Image, View } from "react-native";
import React from "react";
import { SemiBold, Text, GrayText } from "../../layout/Text";
import { style } from "../../styles";
import { EvilIcons, Feather, Fontisto } from "react-native-vector-icons";
import { colors } from "../../styles/color";
import { Button, RejectButton } from "../../layout/Button";

const PickupDetails = () => {
  return (
    <View style={{ ...style.mt_2, ...style.screen, ...style.center }}>
      <View style={{ ...style.center }}>
        <Image
          source={require("../../../assets/images/scrap.png")}
          style={{ width: 140, height: 140, borderRadius: 20 }}
        />
        <View
          style={{ width: "99%", ...style.mt_2, ...style.border, ...style.box }}
        >
          <View style={{ ...style.row, ...style.s_b, ...style.mv_1 }}>
            <Text>Date</Text>
            <GrayText>{"Fri Dec 16 2022"}</GrayText>
          </View>

          <View style={{ ...style.row, ...style.s_b, ...style.mv_1 }}>
            <Text>Createed By</Text>
            <GrayText>Infinite Cercle Private Limited</GrayText>
          </View>

          <View style={{ ...style.row, ...style.s_b, ...style.mv_1 }}>
            <Text>Type</Text>
            <GrayText>{"COPPER-LDC"}</GrayText>
          </View>

          <View
            style={{
              ...style.row,
              ...style.s_b,
              ...style.mv_1,
              ...style.start,
            }}
          >
            <Text style={{ width: "50%" }}>Location</Text>
            <GrayText style={{ width: "50%" }}>
              Borivali Station West, Sundar Nagar, Borivali West, Mumbai,
              Maharashtra, India
            </GrayText>
          </View>
        </View>
      </View>
      <Button>Accept</Button>
      <GrayText>OR</GrayText>
      <RejectButton>Ignore</RejectButton>
    </View>
  );
};

export default PickupDetails;

const styles = StyleSheet.create({});
