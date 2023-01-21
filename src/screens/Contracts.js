import { StyleSheet, View, FlatList } from "react-native";
import React from "react";
import SingleContractItem from "../components/contracts/SingleContractItem";

const Contracts = () => {
  const data = [1, 2, 3];

  return (
    <View>
      <FlatList
        data={data}
        renderItem={(item) => <SingleContractItem />}
        numColumns={1}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default Contracts;

const styles = StyleSheet.create({});
