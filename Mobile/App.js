import React, {useState} from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from "react-native";

export default function App(){
  const [value, setValue] = useState("");

  function handlePress(valueFKey){
    const OPERATORS = ["/","+","-","*"];
    const evaluated = isEvaluated();

    if (evaluated || !(OPERATORS.some(value => value === valueFKey))){
      setValue(value + valueFKey);
    }else {
      setValue(value)
    }
  }

  function isEvaluated() {
    const OPERATORS = ["/","+","-","*"];
    const arrayValue = value.split(""); 
    return !(
      OPERATORS.some(value => {
        return arrayValue.some(item => {
          return item === value
        })
      })
    );
  }

  function clearScreen(){
    setValue("");
  }

  function eraseLastDigit(){
    if(value){
      setValue(value.substring(0,value.length - 1))
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.childContainer}>
        <View style={styles.screen}>
          <Text style={styles.text}>
            Info: {value}
          </Text>
        </View>
        <View style={styles.buttons}>
          <View style={styles.button}>
            <TouchableOpacity onPress={() => handlePress("1")} style={styles.btn}><Text>1</Text></TouchableOpacity>
            <TouchableOpacity onPress={() => handlePress("2")} style={styles.btn}><Text>2</Text></TouchableOpacity>
            <TouchableOpacity onPress={() => handlePress("3")} style={styles.btn}><Text>3</Text></TouchableOpacity>
            <TouchableOpacity onPress={() => handlePress("+")} style={styles.btn}><Text>-</Text></TouchableOpacity>
          </View>
          <View style={styles.button}>
            <TouchableOpacity onPress={() => handlePress("4")} style={styles.btn}><Text>4</Text></TouchableOpacity>
            <TouchableOpacity onPress={() => handlePress("5")} style={styles.btn}><Text>5</Text></TouchableOpacity>
            <TouchableOpacity onPress={() => handlePress("6")} style={styles.btn}><Text>6</Text></TouchableOpacity>
            <TouchableOpacity onPress={() => handlePress("-")} style={styles.btn}><Text>+</Text></TouchableOpacity>
          </View>
           <View style={styles.button}>
            <TouchableOpacity onPress={() => handlePress("7")} style={styles.btn}><Text>4</Text></TouchableOpacity>
            <TouchableOpacity onPress={() => handlePress("8")} style={styles.btn}><Text>5</Text></TouchableOpacity>
            <TouchableOpacity onPress={() => handlePress("9")} style={styles.btn}><Text>6</Text></TouchableOpacity>
            <TouchableOpacity onPress={() => handlePress("/")} style={styles.btn}><Text>/</Text></TouchableOpacity>
          </View>
           <View style={styles.button}>
            <TouchableOpacity onPress={() => eraseLastDigit("8")} style={styles.btn}><Text>back</Text></TouchableOpacity>
            <TouchableOpacity onPress={() => clearScreen()} style={styles.btn}><Text>C</Text></TouchableOpacity>
            <TouchableOpacity onPress={() => handlePress(",")} style={styles.btn}><Text>,</Text></TouchableOpacity>
            <TouchableOpacity onPress={() => handlePress("*")} style={styles.btn}><Text>*</Text></TouchableOpacity>
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