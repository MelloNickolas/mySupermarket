import React from "react";
import {
  Text,
  View,
  Image,
  StyleSheet,
  Dimensions,
  SectionList,
} from "react-native";
import logo from "../../../assets/logo.png";

const DATA = [
  {
    title: "FRIOS",
    data: ["Mussarela", "Presunto", "Mortadela"],
  },
  {
    title: "Sides",
    data: ["French Fries", "Onion Rings", "Fried Shrimps"],
  },
  {
    title: "Drinks",
    data: ["Water", "Coke", "Beer"],
  },
  {
    title: "Desserts",
    data: ["Cheese Cake", "Ice Cream"],
  },
];

export default function Supermarket() {
  return (
    <>
      <Image source={logo} style={styles.topo} />


      <SectionList
        sections={DATA}
        keyExtractor={(item, index) => item + index}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text style={styles.title}>{item}</Text>
          </View>
        )}
        renderSectionHeader={({ section: { title } }) => (
          <Text style={styles.header}>{title}</Text>
        )}
      />




    </>
  );
}

const width = Dimensions.get("screen").width;

const styles = StyleSheet.create({
  topo: {
    width: "100%",
    height: 100,
  },
  header: {
      fontSize: 40,
      marginVertical: 20,
      textAlign: "center",
      
  },
  title: {
    fontFamily: "Caveat",
    fontSize: 30,
  },
  item: {
    backgroundColor: "#f9c2ff",
    padding: 20,
    marginVertical: 3,
  },
});

// color image yellow #ed8b00
// color image black #000000