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
    title: "Main dishes",
    data: ["Pizza", "Burger", "Risotto"],
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
      <Image source={logo} style={styles.header} />
      <View style={styles.container}>
        <Text style={styles.title}> Products </Text>
      </View>
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
  header: {
    width: "100%",
    height: 100,
  },
  container: {
    paddingVertical: 20,
    paddingHorizontal: 20,
  },
  title: {
    fontFamily: "Caveat",
    fontSize: 50,
  },
  item: {
    backgroundColor: "#f9c2ff",
    padding: 20,
    marginVertical: 8,
  },
});

// color image #FFDE7D
