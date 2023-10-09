import React from "react";
import { Text, StyleSheet } from "react-native";

type props ={
    sessao: string
}


export default function Title({sessao} : props){
    return<>
    <Text style={styles.title}>{sessao}</Text>    
    </>
}


const styles = StyleSheet.create({
    title: {
        fontSize: 30,
        color: "#ed8b00",
        fontWeight: "bold",
        fontFamily: "Caveat",
      },
});