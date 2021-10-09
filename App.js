import React, {useState} from 'react';
import {View, Text,Button, StyleSheet, TouchableOpacity, TextInput} from 'react-native';


export default function App(){

const [text, setText] = useState("")
const [segundoNum, setSegundoNum] = useState("")

function calculator(){
  const separaNum = text.split(' ')
  const primeiroNum = parseFloat(separaNum[0])
  const segundoNum = parseFloat(separaNum[2])
  const operador = separaNum[1]

  switch(operador){
    case '+':
      setText((primeiroNum + segundoNum).toString())
      return
    case '-':
      setText((primeiroNum - segundoNum).toString())
      return
   case '*':
      setText((primeiroNum * segundoNum).toString())
      return
    case '/':
     setText((primeiroNum / segundoNum).toString())
      return

  }
}

function pressioneBotao(pressione){
   if(pressione === '+' | pressione === '*' | pressione === '-' | pressione === '/' ){
      setText(text+ " " + pressione + " ")
      return;
   }
   switch(pressione){
     case 'C':
     setText(text.substring(0, text.length -1))
      setSegundoNum("")
      return;
     case '=':
     setSegundoNum(text + " = ")
      calculator()
      return;
    
   }
    setText(text + pressione )
}

 
  return(
  <View style={styles.container}>
    <Text style={styles.titulo}>Calculadora</Text>

<View style={styles.resultadoContainer}>
  <Text style={styles.resultText}>{text}</Text>
  <Text style={styles.result}>{segundoNum}</Text>
      </View>


      <View style={styles.inputContainer}>
      <View style={styles.containner}>
      <TouchableOpacity style = {styles.box}>

      <Text style={styles.text} 
      onPress={() => pressioneBotao(7)}>7</Text>
      </TouchableOpacity>
      <TouchableOpacity style = {styles.box}>
      <Text style={styles.text} 
      onPress={() => pressioneBotao(8)}>8</Text>
      </TouchableOpacity>
      <TouchableOpacity style = {styles.box}>
      <Text style={styles.text} 
      onPress={() => pressioneBotao(9)}>9</Text>
      </TouchableOpacity>

      <TouchableOpacity style = {styles.operadores}>
      <Text style={styles.text} 
      onPress={() => pressioneBotao("/")}>/</Text>
      </TouchableOpacity>

      <TouchableOpacity style = {styles.box}>
      <Text style={styles.text} 
      onPress={() => pressioneBotao(4)}>4</Text>
      </TouchableOpacity>
      <TouchableOpacity style = {styles.box}>
      <Text style={styles.text} 
      onPress={() => pressioneBotao(5)}>5</Text>
      </TouchableOpacity>
      <TouchableOpacity style = {styles.box}>
      <Text style={styles.text} 
      onPress={() => pressioneBotao(6)}>6</Text>
      </TouchableOpacity>

      <TouchableOpacity style = {styles.operadores}>
      <Text style={styles.text} 
      onPress={() => pressioneBotao("*")}>*</Text>
      </TouchableOpacity>
     
      <TouchableOpacity style = {styles.box}>
      <Text style={styles.text} 
      onPress={() => pressioneBotao(1)}>1</Text>
      </TouchableOpacity>
      <TouchableOpacity style = {styles.box}>
      <Text style={styles.text} 
      onPress={() => pressioneBotao(2)}>2</Text>
      </TouchableOpacity>
      <TouchableOpacity style = {styles.box}>
      <Text style={styles.text} 
      onPress={() => pressioneBotao(3)}>3</Text>
      </TouchableOpacity>
       
      <TouchableOpacity style = {styles.operadores}>
      <Text style={styles.text} 
      onPress={() => pressioneBotao("-")}>-</Text>
      </TouchableOpacity>

      <TouchableOpacity style = {styles.operadores}>
      <Text style={styles.text} 
      onPress={() => pressioneBotao("=")}>=</Text>
      </TouchableOpacity>

      <TouchableOpacity style = {styles.operadores}>
      <Text style={styles.text} 
      onPress={() => pressioneBotao("+")}>+</Text>
      </TouchableOpacity>

      <TouchableOpacity style = {styles.ac}>
      <Text style={styles.text} 
      onPress={() => pressioneBotao("C")}>AC</Text>
      </TouchableOpacity>
           

    </View>

      </View>

      
  </View>
    
  );
}

const styles = StyleSheet.create({
  container:{
    flex: 1  
 },
 titulo:{
  fontSize: 35,
  fontWeight: '100',
  textAlign: 'center',
  padding: 30,
  backgroundColor: '#D8BFD8',
  color: "white",
  margin: 0
},

  containner:{
   flexDirection: "row",
   flexWrap:'wrap'
  },

  box:{
    flex: 1,
    minHeight:100,
    minWidth:90,
    padding: 25,
    borderColor: 'black',
    backgroundColor: '#D8BFD8',
    borderWidth: 0.4,
    margin: 0
    
  },
  resultadoContainer:{
    flex: 1,
    justifyContent: "center",
    backgroundColor: '#ffff'
  },

  inputContainer:{
    flex: 2,
    backgroundColor: '#D8BFD8'
  },
  resultText:{
     color: 'black',
     fontSize: 40,
     padding: 20,
     textAlign: "right"
  },
  result:{
    color: 'black',
    fontSize: 20,
    paddingHorizontal: 20,
    textAlign: "right"
  },

  input:{
    textAlign: "center",
    alignSelf: "stretch",
    marginHorizontal: 20,
    fontSize: 30,
    height: 50,
    backgroundColor: '#FFF',
    marginTop: 20
  },
  text:{
    textAlign: "center",
    fontSize: 30,
    color: 'white'

  },
  operadores:{
    flex: 1,
    minHeight:100,
    minWidth:90,
    padding: 25,
    borderColor: 'black',
    backgroundColor: '#BA55D3',
    borderWidth: 0.3,
    margin: 0
  },

  ac:{
    flex: 1,
    minHeight:100,
    minWidth:90,
    padding: 25,
    borderColor: 'black',
    backgroundColor: '#D8BFD8',
    borderWidth: 0.3,
    margin: 0
  }

});