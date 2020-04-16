import React, {useState} from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from "react-native";

export default function App(){
  const [value, setValue] = useState("");
  const [index, setIndex] = useState(-1);
  const [operators, setOperator] = useState(["/","+","-","*","="])
  const [numbers, setNumbers] = useState(["1","2","3","4","5","6","7","8","9"])

  function handlePress(valueFKey){
    const evaluated = isEvaluated();

    if (evaluated || !(operators.some(value => value === valueFKey))){
      setValue(value + valueFKey);
    }
    else if (valueFKey === "="){
      handleOperation()
    }
    else {
      setValue(value)
    }
  }

  function isEvaluated() {
    const arrayValue = value.split("");

    return !(
      operators.some(value => {
        return arrayValue.some((item,index) => {
          if (item == value){
            setIndex(index);
          }
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

  function handleOperation(){
    const one = parseInt(value.substring(0,index));
    const two = parseInt(value.substring(index + 1, value.length));
    const operator = value.substring(index,index + 1);

    console.log(operator);
    console.log(one);
    console.log(two);

    switch(operator) {
      case "+":
        setValue((one + two).toString());
        break;
      case "-":
        setValue((one - two).toString());
        break;
      case "*":
        setValue((one * two).toString());
        break;
      case "/":
        setValue((one / two).toString());
        break;
      default:
        break;
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.childContainer}>
        <View style={styles.screen}>
          <Text style={styles.text}>
            {value}
          </Text>
        </View>
        <View style={styles.buttons}>
          <View style={styles.button}>
            <TouchableOpacity onPress={() => handlePress(numbers[0])} style={styles.btn}><Text>{numbers[0]}</Text></TouchableOpacity>
            <TouchableOpacity onPress={() => handlePress(numbers[1])} style={styles.btn}><Text>{numbers[1]}</Text></TouchableOpacity>
            <TouchableOpacity onPress={() => handlePress(numbers[2])} style={styles.btn}><Text>{numbers[2]}</Text></TouchableOpacity>
            <TouchableOpacity onPress={() => handlePress(operators[0])} style={styles.btn}><Text>{operators[0]}</Text></TouchableOpacity>
          </View>
          <View style={styles.button}>
            <TouchableOpacity onPress={() => handlePress(numbers[3])} style={styles.btn}><Text>{numbers[3]}</Text></TouchableOpacity>
            <TouchableOpacity onPress={() => handlePress(numbers[4])} style={styles.btn}><Text>{numbers[4]}</Text></TouchableOpacity>
            <TouchableOpacity onPress={() => handlePress(numbers[5])} style={styles.btn}><Text>{numbers[5]}</Text></TouchableOpacity>
            <TouchableOpacity onPress={() => handlePress(operators[1])} style={styles.btn}><Text>{operators[1]}</Text></TouchableOpacity>
          </View>
           <View style={styles.button}>
            <TouchableOpacity onPress={() => handlePress(numbers[6])} style={styles.btn}><Text>{numbers[6]}</Text></TouchableOpacity>
            <TouchableOpacity onPress={() => handlePress(numbers[7])} style={styles.btn}><Text>{numbers[7]}</Text></TouchableOpacity>
            <TouchableOpacity onPress={() => handlePress(numbers[8])} style={styles.btn}><Text>{numbers[8]}</Text></TouchableOpacity>
            <TouchableOpacity onPress={() => handlePress(operators[2])} style={styles.btn}><Text>{operators[2]}</Text></TouchableOpacity>
          </View>
           <View style={styles.button}>
            <TouchableOpacity onPress={() => eraseLastDigit()} style={styles.btn}><Text>back</Text></TouchableOpacity>
            <TouchableOpacity onPress={() => clearScreen()} style={styles.btn}><Text>C</Text></TouchableOpacity>
            <TouchableOpacity onPress={() => handlePress(",")} style={styles.btn}><Text>,</Text></TouchableOpacity>
            <TouchableOpacity onPress={() => handlePress(operators[3])} style={styles.btn}><Text>{operators[3]}</Text></TouchableOpacity>
          </View>
          <View style={styles.button}>
            <TouchableOpacity onPress={() => handlePress("=")} style={styles.btn}><Text>=</Text></TouchableOpacity>
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