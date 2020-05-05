import React from 'react';
import { Image, StyleSheet, Text, View, TouchableOpacity, TextInput, ScrollView} from 'react-native';
import logo from './assets/logo.png'; 

class App extends React.Component {


state={
  id: "loading",
}

componentDidMount(){
fetch("https://tranquil-reaches-97237.herokuapp.com/api/elevators")
.then(data=>data.json())
.then(data2=>{
  console.log(data2)
  this.setState({
    id:data2[0].id

  })
})
}
render() {
  console.log("from render")
  return (
    <View style={styles.container}>

<Image source={logo} style={styles.logo} /> 
{/* <Image source={{ uri: "https://i.imgur.com/TkIrScD.png" }} style={{ width: 305, height: 159 }} /> */}

      <Text style={styles.instructions}> Welcome to Rocket Elevators!</Text>
      <Text>Please login using your email.</Text>
<TextInput style={styles.textinput}
  placeholder = "email" />
      <TouchableOpacity
        onPress={() => alert('Login was sucessful!')} style={styles.button}>
        <Text style={styles.buttonText}>Login!</Text>
      </TouchableOpacity>
      
      {/* <ScrollView> */}
      <Text style={styles.elevatorStatus}>{this.state.id}</Text>      
      <Text style={styles.elevatorStatusText}> {this.state.status} </Text>
         {/* </ScrollView> */}
    </View>
  );
}
}

export default  App;
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
    marginHorizontal: 15,
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
  },
  elevatorStatus: {
    backgroundColor: "red",
    padding: 20,
    borderRadius: 5,
  },
  elevatorStatusText: {
    fontSize: 20,
    color: '#fff',
  }
});
