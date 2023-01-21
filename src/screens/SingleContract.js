import { StyleSheet, View, Image } from "react-native";
import React from "react";
import { Text, SemiBold } from "../layout/Text";
import { style } from "../styles";
import { Fontisto, MaterialIcons, Ionicons } from "react-native-vector-icons";
import { colors } from "../styles/color";
import { FlatList } from "react-native-gesture-handler";
import SingleMaterialContract from "../components/contracts/SingleMaterialContract";

const SingleContract = () => {
  const data = [1, 2];
  return (
    <View>
      <View style={{ ...style.box }}>
        <View style={{ ...style.row, ...style.mb_1 }}>
          <Image
            source={require("../../assets/images/company.png")}
            style={{ width: 35, height: 35 }}
          />
          <SemiBold>&nbsp;Infinite Cercle Private Limited</SemiBold>
        </View>

        <View style={{ ...style.row, ...style.mt_1 }}>
          <Fontisto name={"date"} size={20} color={colors.primary} />
          <Text>&nbsp;dd/mm/yyyy - dd/mm/yyyy</Text>
        </View>

        <View style={{ ...style.row, ...style.mt_1 }}>
          <Ionicons name={"today-outline"} size={20} color={colors.primary} />
          <Text>&nbsp; Expires in 200days</Text>
        </View>
      </View>

      <SemiBold style={{ margin: 10 }}>Material Details</SemiBold>
      <FlatList
        numColumns={2}
        data={data}
        renderItem={(item) => <SingleMaterialContract />}
      />
    </View>
  );
};

export default SingleContract;

const styles = StyleSheet.create({});
