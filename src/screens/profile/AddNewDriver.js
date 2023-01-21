import { StyleSheet, View, TextInput } from "react-native";
import React from "react";
import { style } from "../../styles";
import { Button } from "../../layout/Button";

const AddNewDriver = () => {
  return (
    <View style={{ ...style.screen }}>
      <TextInput
        placeholder="Driver Name"
        style={{ ...style.inputText }}
        keyboardType="default"
      />

      <TextInput
        placeholder="Driver Email Address"
        style={{ ...style.inputText }}
        keyboardType="email-address"
      />
      <Button>Submit</Button>
    </View>
  );
};

export default AddNewDriver;

const styles = StyleSheet.create({});
