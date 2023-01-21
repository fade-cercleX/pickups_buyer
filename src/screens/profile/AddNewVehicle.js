import { StyleSheet, View, TextInput } from "react-native";
import React from "react";
import { style } from "../../styles";
import { Button } from "../../layout/Button";

const AddNewVehicle = () => {
  return (
    <View style={{ ...style.screen }}>
      <TextInput
        placeholder="Vehicle's Registration Number"
        style={{ ...style.inputText }}
        keyboardType="default"
      />

      <TextInput
        placeholder="Driver Email Address"
        style={{ ...style.inputText }}
        keyboardType="default"
      />

      <Button>Submit</Button>
    </View>
  );
};

export default AddNewVehicle;

const styles = StyleSheet.create({});
