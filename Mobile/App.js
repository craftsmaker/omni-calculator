import React from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from "react-native";

export default function App(){
  return (
    <View style={styles.container}>
      <View style={styles.childContainer}>
        <View style={styles.screen}>
          <Text style={styles.text}>
            Info
          </Text>
        </View>
        <View style={styles.buttons}>
          <View style={styles.button}>
            <TouchableOpacity style={styles.btn}><Text>1</Text></TouchableOpacity>
            <TouchableOpacity style={styles.btn}><Text>2</Text></TouchableOpacity>
            <TouchableOpacity style={styles.btn}><Text>3</Text></TouchableOpacity>
          </View>
          <View style={styles.button}>
            <TouchableOpacity style={styles.btn}><Text>4</Text></TouchableOpacity>
            <TouchableOpacity style={styles.btn}><Text>5</Text></TouchableOpacity>
            <TouchableOpacity style={styles.btn}><Text>6</Text></TouchableOpacity>
          </View>
           <View style={styles.button}>
            <TouchableOpacity style={styles.btn}><Text>4</Text></TouchableOpacity>
            <TouchableOpacity style={styles.btn}><Text>5</Text></TouchableOpacity>
            <TouchableOpacity style={styles.btn}><Text>6</Text></TouchableOpacity>
          </View>

        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:"center",
    alignItems: "center"
  },
  childContainer: {
    flex: 1,
    borderColor: "gray",
    borderWidth: 4,
    width: "100%",
    overflow: "hidden",
  },
  screen: {
    flex: 1,
    backgroundColor: "black",
  },
  text: {
    color: "white",
    position: "absolute",
    bottom: 0,
    right: 0,
    padding: 10,
  },
  buttons: {
    flex: 1,
  },
  button: {
    flex:1,
    flexDirection: "row",
  },
  btn: {
    flex: 1,
    backgroundColor: "blue",
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
  },
})