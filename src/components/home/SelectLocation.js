import { StyleSheet, View, FlatList } from "react-native";
import React, { useState } from "react";
import { SemiBold, Text } from "../../layout/Text";
import { MaterialIcons, Ionicons } from "react-native-vector-icons";
import { colors } from "../../styles/color";
import { style } from "../../styles";
import RadioForm, {
  RadioButton,
  RadioButtonInput,
  RadioButtonLabel,
} from "react-native-simple-radio-button";
import { Button } from "../../layout/Button";

const SelectLocation = () => {
  const [location, setLocation] = useState(null);
  var radio_props = [
    {
      label: `Borivali Station West, Sundar Nagar, Borivali West, Mumbai, Maharashtra, India ${12} `,
      value: 0,
    },
    { label: "location2", value: 1 },
  ];

  return (
    <View style={styles.acceptPickupModal}>
      <SemiBold style={{ color: colors.primary }}>Accept Pickup</SemiBold>

      <View style={{ ...style.row, ...style.s_b, alignItems: "center" }}>
        <SemiBold style={{ fontSize: 15, color: colors.grey }}>
          Select Location
        </SemiBold>
        <MaterialIcons
          name="add-location-alt"
          color={colors.primary}
          size={22}
          style={styles.icon}
        />
      </View>

      <View style={{ ...style.mt_1 }}>
        <RadioForm animation={true}>
          {radio_props.map((obj, i) => (
            <RadioButton key={i} style={{ width: "92%", ...style.mt_1 }}>
              <Ionicons
                name="location-outline"
                color={colors.primary}
                size={19}
              />
              <View style={styles.column}>
                <Text style={{ color: colors.primary, fontSize: 16 }}>
                  OFFICE
                </Text>

                <RadioButtonLabel
                  obj={obj}
                  index={i}
                  //   onPress={onPress}
                  labelStyle={{ color: "#3A363E", width: "100%" }}
                />
              </View>
              <RadioButtonInput
                obj={obj}
                index={i}
                //   isSelected={this.state.value3Index === i}
                //   onPress={onPress}
                borderWidth={1.5}
                buttonInnerColor={"#000"}
                //   buttonOuterColor={this.state.value3Index === i ? '#2196f3' : '#000'}
                buttonSize={4}
                buttonOuterSize={15}
                buttonStyle={{}}
              />
            </RadioButton>
          ))}
        </RadioForm>
      </View>
      <Button>
        <SemiBold style={{ fontSize: 20 }}>Next</SemiBold>
      </Button>
    </View>
  );
};

export default SelectLocation;

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
    borderRadius: 50,
    borderColor: colors.primary,
    borderWidth: 1,
  },
  column: {
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
});
