import 'react-native-gesture-handler';
import React,{useState,useEffect} from 'react';
import { ImageBackground,TextInput,ActivityIndicator,Image, StyleSheet, Text, View, TouchableOpacity, ScrollView, FlatList} from 'react-native';
import logo from './assets/logo.png';
import image from './assets/blue.jpg';  
import {  Appbar, Button} from 'react-native-paper';

const StartupScreen=(props)=> {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [value, onChangeText] = React.useState('ijlal36@gmail.com');
  // const image = { uri: "https://reactjs.org/logo-og.png" };
useEffect(()=>{ 
    fetch('https://tranquil-reaches-97237.herokuapp.com/api/employees')
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);



function findArrayElementByTitle(array, title) {
  return array.find((element) => {
    return element.email === title;
  })
}

  //  console.log(data)
  return (
    <View style={styles.container}>

<ImageBackground source={image} style={styles.image}>
<Image source={logo} style={styles.logo} resizeMode="contain" /> 
{/* <Image source={{ uri: "https://i.imgur.com/TkIrScD.png" }} style={{ width: 305, height: 159 }} /> */}

      <Text style={styles.instructions}> Welcome to Rocket Elevators!</Text>
      <Text style = {{color: "white", margin:10}}>Please login using your email.</Text>
      <TextInput
      style={{color: "white",height: 40, borderColor: 'gray', borderWidth: 1 }}
      onChangeText={text => onChangeText(text)}
      value={value}
    />

      
      <TouchableOpacity>
        {/* onPress={() => alert('Login was sucessful!')} style={styles.button}>
        <Text style={styles.buttonText}>Login!</Text> */}
        <Button style = {{margin:10}}
         icon="login" mode="contained" onPress={() => {if (findArrayElementByTitle(data,value) != undefined) {
           props.navigation.navigate("Home")
           console.log("true")
         } else {
          alert("The email entered is not the email of a listed agent, please try again!")
console.log("The email entered is not the email of a listed agent, please try again!")
         }}} > Log in </Button>
      </TouchableOpacity>
 
      </ImageBackground>
      
    </View>
  );

}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 400,
    height: 159,
    marginBottom: 10,
    
  },
  instructions: {
    color: '#888',
    fontSize: 18,
    margin: 15,

  }, 
  button: {
    backgroundColor: "blue",
    padding: 20,
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 20,
    color: '#fff',
  },
  textinput: {
    fontSize:30, height: 40,
    margin: 10
  },
  elevatorId: {
    backgroundColor: "red",
    padding: 20,
    borderRadius: 5,
    textAlign: "center"
  },
  elevatorIdText: {
    fontSize: 20,
    color: '#fff',

  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center"
  }
});

export default StartupScreen

// style = {{alignItems: "stretch"}}