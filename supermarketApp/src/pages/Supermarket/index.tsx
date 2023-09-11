import React from "react";

import { Text, View, Image, StyleSheet, Dimensions } from "react-native";
import logo from "../../../assets/logo.png";
import minilogo from "../../../assets/minilogo.png";
import mussarela from "../../../assets/mussarela.png.png";

export default function Supermarket() {
  return (
    <>
      <View style={styles.back}>
        <Image source={logo} style={styles.topo} />

        <View style={styles.containerImg}>

          <Image source={mussarela} style={styles.imgContainer}/>

          <View style={styles.container}>
            <View style={styles.start}>
              <Text style={styles.text}>MUSSARELA</Text>
            </View>

            <View style={styles.end}>
              <Text style={styles.text}>R$37,90 KG</Text>
            </View>
          </View>
        </View>

       
      </View>
    </>
  );
}

const width = Dimensions.get("screen").width;

const styles = StyleSheet.create({
  back:{
 
  },
  topo: {
    width: "100%",
    height: 100,
  },
  containerImg: {
    height: 200,
    marginVertical: 20,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10
  },
  container: {
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "row",
    backgroundColor: "#11111f",
    marginHorizontal: 40,
    height: 50,
    borderRadius: 10
  },

  imgContainer: {
    width: "87%",
    height: "65%",
  },

  start: {
    width: "50%",
    display: "flex",
    alignItems: "flex-start",
    alignSelf: "center",
    marginLeft: "5%",
  },

  end: {
    width: "50%",
    display: "flex",
    alignItems: "flex-end",
    alignSelf: "center",
    marginRight: "5%",
  },
  text: {
    color: "#ed8b00",
    fontFamily: "Caveat",
    fontSize: 20,
    fontWeight: "bold"
  },
});

// color image yellow #ed8b00
// color image black #000000
