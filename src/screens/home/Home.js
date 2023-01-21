import { StyleSheet, FlatList, View } from "react-native";
import React from "react";
import SinglePickup from "../../components/home/SinglePickup";
import { Text } from "../../layout/Text";
import PriceNegotiate from "../../components/home/PriceNegotiate";
import { style } from "../../styles";

const Home = () => {
  const data = [1, 5, 5, , 5];
  return (
    <View style={{ ...style.screen, marginBottom: 30 }}>
      <FlatList
        ListHeaderComponent={<PriceNegotiate />}
        data={data}
        renderItem={({ item }) => <SinglePickup />}
        numColumns={1}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});
