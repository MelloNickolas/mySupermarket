import React from "react";
import { Text, View, Image, StyleSheet, Dimensions } from "react-native";
import logo from "../../../assets/logo.png";

export default function Supermarket() {
  return (
    <>
      <Image source={logo} style={styles.header} />
      <View style={styles.cardTitle}>
        <Text style={styles.title}>My Supermarket </Text>
      </View>
    </>
  );
}

const width = Dimensions.get('screen').width;

const styles = StyleSheet.create({
  header: {
    width: "100%",
    height: 100
  },
  cardTitle: {
    paddingLeft: 10,
    borderStyle: "solid",
    borderColor: "black"
  },
  title: {
        fontFamily: "Caveat"
  },
});

// color image #FFDE7D
