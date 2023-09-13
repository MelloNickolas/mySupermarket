import React from "react";

import { Text, View, Image, StyleSheet,  ScrollView, Dimensions } from "react-native";
import logo from "../../../assets/logo.png";
import mussarela from "../../../assets/frios/mussarela.png";
import presunto from "../../../assets/frios/presunto.png";
import mortadela from "../../../assets/frios/mortadela.png";

export default function Supermarket() {
  return (
    <>
    
      <View style={styles.back}>
        <Image source={logo} style={styles.topo} />


        <View style={styles.containerTitle}>
          <Text style={styles.title}>FRIOS</Text>
        </View>

        <View style={styles.containerLinha}>
          <View style={styles.linha}>
            <Text>.</Text>
          </View>
        </View>

        <View style={styles.containerImg}>
          <Image source={mussarela} style={styles.imgContainer} />

          <View style={styles.container}>
            <View style={styles.start}>
              <Text style={styles.text}>MUSSARELA</Text>
            </View>

            <View style={styles.end}>
              <Text style={styles.text}>R$37,90 KG</Text>
            </View>
          </View>
        </View>

        <View style={styles.containerImg}>
          <Image source={presunto} style={styles.imgContainer} />

          <View style={styles.container}>
            <View style={styles.start}>
              <Text style={styles.text}>Presunto</Text>
            </View>

            <View style={styles.end}>
              <Text style={styles.text}>R$32,40 KG</Text>
            </View>
          </View>
        </View>

        <View style={styles.containerImg}>
          <Image source={mortadela} style={styles.imgContainer} />

          <View style={styles.container}>
            <View style={styles.start}>
              <Text style={styles.text}>Mortadela</Text>
            </View>

            <View style={styles.end}>
              <Text style={styles.text}>R$26,00 KG</Text>
            </View>
          </View>
        </View>
     
      </View>
    </>
  );
}

const width = Dimensions.get("screen").width;

const styles = StyleSheet.create({
  back: {},
  containerTitle: {
    display: "flex",
    justifyContent: "center",
    alignSelf: "center",
    alignItems: "center",
    height: 50,
    width: "100%",
    marginTop: 10,
  },
  title: {
    fontSize: 30,
    color: "#ed8b00",
    fontWeight: "bold",
    fontFamily: "Caveat",
  },
  topo: {
    width: "100%",
    height: 90,
  },
  containerLinha: {
    display: "flex",
    justifyContent: "center",
    alignSelf: "center",
    alignItems: "center",
    width: "80%",
    height: 2,
  
  },
  linha: {
    backgroundColor: "#11111f",
    width: "100%",
  },
  containerImg: {
    height: 200,
    marginVertical: 5,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
  container: {
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "row",
    backgroundColor: "#11111f",
    marginHorizontal: 40,
    height: 
    40,
    borderRadius: 10,
  },

  imgContainer: {
    width: "87%",
    height: "62%",
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
    fontWeight: "bold",
  },
});

// color image yellow #ed8b00
// color image black #000000
