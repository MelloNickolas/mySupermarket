import React from "react";

import {
  Text,
  View,
  Image,
  StyleSheet,
  Dimensions,
} from "react-native";
import logo from "../../../assets/logo.png";
import bolacha from "../../../assets/Produtos/bolacha.png";



export default function Supermarket() {
  return (
    <>

      <View>
        <Image source={logo} style={styles.topo} />

      <View style={styles.container}>
        <Text>Mussarela</Text>
        <Text>R$37,90</Text>
        <Image source={bolacha} style={styles.imgContainer}/>
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
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
  },
  imgContainer: {
    height: 100
  }
});

// color image yellow #ed8b00
// color image black #000000
