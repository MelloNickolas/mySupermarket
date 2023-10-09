import React from "react";
import { Text, View, Image, StyleSheet,  ScrollView, Dimensions } from "react-native";
import logo from "../../../assets/logo.png";
import dados from "../../mocks/products"
import Produtos from "./components/produtos";
import Title from "./components/title";

type props ={
  image: URL,
  
}

export default function Supermarket() {
  return (
    <>
    
      <View style={styles.back}>
        <Image source={logo} style={styles.topo} />


        <View style={styles.containerTitle}>
          <Title sessao={dados.título.sessao}/>
        </View>

        <View style={styles.containerLinha}>
          <View style={styles.linha}>
            <Text>.</Text>
          </View>
        </View>
     
        <Produtos 
          nome={dados.produto.nome}
          preco={dados.produto.preco}
        />
          
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
