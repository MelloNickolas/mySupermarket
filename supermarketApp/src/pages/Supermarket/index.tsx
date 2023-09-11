import React from "react";

import { Text, View, Image, StyleSheet, Dimensions } from "react-native";
import logo from "../../../assets/logo.png";
import minilogo from "../../../assets/minilogo.png";

export default function Supermarket() {
  return (
    <>
      <View>
        <Image source={logo} style={styles.topo} />

        <View style={styles.container}>
          <View style={styles.start}>
            <Text>Mussarela</Text>
          </View>

          <View style={styles.middle}>
            <Text>R$37,90 KG</Text>
          </View>

          <View style={styles.end}>
            <Image source={minilogo} style={styles.imgContainer} />
          </View>
        </View>


        <View style={styles.container}>
          <Text>Presunto</Text>
          <Text>R$32,90 KG</Text>
        </View>

        <View style={styles.container}>
          <Text>Mortadela</Text>
          <Text>R$27,90 KG</Text>
        </View>
      </View>
    </>
  );
}

const width = Dimensions.get("screen").width;

const styles = StyleSheet.create({
  topo: {
    width: "100%",
    height: 100,
  },

  container: {
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "row",
    height: 100,
    backgroundColor: "#171717",
    marginTop: 10,
    
  },

  imgContainer: {
    width: "80%",
    height: "100%",
  },
  
  start: {
    width: "33%",
    display: "flex",
    justifyContent: "center",
    alignSelf: "center",
    marginLeft: "5%"
  },

  middle: {
    width: "33%",
    display: "flex",
    justifyContent: "center",
    alignSelf: "center"
  },

  end: {
    width: "34%",
    display: "flex",
    justifyContent: "center",
    alignSelf: "center",
    marginRight: "5%"
  },
});

// color image yellow #ed8b00
// color image black #000000
