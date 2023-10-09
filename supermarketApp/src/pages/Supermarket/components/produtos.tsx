import React from "react";
import {
  Text,
  View,
  Image,
  StyleSheet,
  ScrollView,
  Dimensions,
} from "react-native";

import mussarela from "../../../../assets/frios/mussarela.png";

type props ={
  nome: string,
  preco: string
}

export default function ({nome, preco} :props) {
  return (
    <>
      <View style={styles.containerImg}>
        <Image source={mussarela} style={styles.imgContainer} />
        <View style={styles.container}>
          <View style={styles.start}>
            <Text style={styles.text}>{nome}</Text>
          </View>

          <View style={styles.end}>
            <Text style={styles.text}>{preco}</Text>
          </View>
        </View>
      </View>

    </>
  );
}

const styles = StyleSheet.create({
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
    height: 40,
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



// <View style={styles.containerImg}>
//        <Image source={mussarela} style={styles.imgContainer} />
//
//        <View style={styles.container}>
//          <View style={styles.start}>
//            <Text style={styles.text}>MUSSARELA</Text>
//          </View>
//
//          <View style={styles.end}>
//            <Text style={styles.text}>R$37,90 KG</Text>
//          </View>
//        </View>
//      </View>

//      <View style={styles.containerImg}>
//        <Image source={presunto} style={styles.imgContainer} />
//
//        <View style={styles.container}>
//          <View style={styles.start}>
//            <Text style={styles.text}>Presunto</Text>
//          </View>

//          <View style={styles.end}>
//            <Text style={styles.text}>R$32,40 KG</Text>
//          </View>
//        </View>
//      </View>

//      <View style={styles.containerImg}>
//        <Image source={mortadela} style={styles.imgContainer} />

//        <View style={styles.container}>
//          <View style={styles.start}>
//            <Text style={styles.text}>Mortadela</Text>
//          </View>

//          <View style={styles.end}>
//            <Text style={styles.text}>R$26,00 KG</Text>
//          </View>
//        </View>
//      </View>