import { StyleSheet, View, TouchableWithoutFeedback } from "react-native";
import React, { useState } from "react";
import { colors } from "../../styles/color";
import {
  MaterialIcons,
  MaterialCommunityIcons,
  Feather,
} from "react-native-vector-icons";
import { Text } from "../../layout/Text";
import { style } from "../../styles";
import Modal from "react-native-modal";
import SelectLocation from "../../components/home/SelectLocation";
import SelectDriver from "../../components/home/SelectDriver";
import SelecetVehicle from "../../components/home/SelecetVehicle";


const AcceptPickup = () => {
  const [openAcceptModal, setAopenAcceptModal] = useState(false);
  const openModal = () => {
    setAopenAcceptModal(true);
  };
  const closeModal = () => {
    setAopenAcceptModal(false);
  };
  return (
    <View>
      <View
        style={{
          ...style.row,
          ...style.center,
          ...style.s_b,
          ...style.inputText,
          ...style.mh_1,
        }}
      >
        <View style={{ ...style.row }}>
          <MaterialCommunityIcons
            name="office-building-marker-outline"
            size={30}
            color={colors.primary}
            style={{ marginRight: 5 }}
          />
          <View>
            <Text style={{ color: colors.grey }}>DROP LOCATION</Text>
            <Text>Select drop location </Text>
          </View>
        </View>
        <View>
          <MaterialIcons name="navigate-next" size={24} color="#263238" />
        </View>
      </View>

      <TouchableWithoutFeedback onPress={openModal}>
        <View
          style={{
            ...style.row,
            ...style.center,
            ...style.s_b,
            ...style.inputText,
            ...style.mh_1,
          }}
        >
          <View style={{ ...style.row }}>
            <Feather
              name="user"
              size={30}
              color={colors.primary}
              style={{ marginRight: 5 }}
            />
            <View>
              <Text style={{ color: colors.grey }}>DRIVER</Text>
              <Text>Select Driver</Text>
            </View>
          </View>
          <View>
            <MaterialIcons name="navigate-next" size={24} color="#263238" />
          </View>
        </View>
      </TouchableWithoutFeedback>

      <View
        style={{
          ...style.row,
          ...style.center,
          ...style.s_b,
          ...style.inputText,
          ...style.mh_1,
        }}
      >
        <View style={{ ...style.row }}>
          <Feather
            name="truck"
            size={30}
            color={colors.primary}
            style={{ ...style.mr_1 }}
          />
          <View>
            <Text style={{ color: colors.grey }}>Vehicles</Text>
            <Text>Select the vehicles</Text>
          </View>
        </View>
        <View>
          <MaterialIcons name="navigate-next" size={24} color="#263238" />
        </View>
      </View>

      <Modal
        isVisible={openAcceptModal}
        onSwipeComplete={closeModal}
        swipeDirection={["down"]}
        style={styles.modal}
      >
        <SelecetVehicle/>
      </Modal>
    </View>
  );
};

export default AcceptPickup;

const styles = StyleSheet.create({
  modal: {
    justifyContent: "flex-end",
    margin: 0,
  },
});
