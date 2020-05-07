import React,{useState,useEffect} from 'react';
import { TextInput,ActivityIndicator,Image, StyleSheet, Text, View, TouchableOpacity, ScrollView, FlatList} from 'react-native';
// import logo from './assets/logo.png'; 
import {  Appbar, Button} from 'react-native-paper';

const StartupScreen=()=> {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [value, onChangeText] = React.useState('Email');
useEffect(()=>{
    fetch('https://tranquil-reaches-97237.herokuapp.com/api/employees')
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);




// state={
//   text: ""
//  }

// componentDidMount(){
// fetch("https://tranquil-reaches-97237.herokuapp.com/api/employees")
// .then(data=>data.json())
// .then(data2=>{
//   // console.log(data2)
//   this.setState({
//     id:data2[0].id
function findArrayElementByTitle(array, title) {
  return array.find((element) => {
    return element.email === title;
  })
}

//   })
// })
// }
// render() {
  //  console.log(data)
  return (
    <View style={styles.container}>
      <Appbar.Header>
        <Appbar.BackAction
          onPress={this._goBack}
        />
        <Appbar.Content
          title="Rocket Elevators"
        />
        {/* <Appbar.Action icon="magnify" onPress={this._handleSearch} />
        <Appbar.Action icon="dots-vertical" onPress={this._handleMore} /> */}
      </Appbar.Header>

{/* <Image source={logo} style={styles.logo} />  */}
{/* <Image source={{ uri: "https://i.imgur.com/TkIrScD.png" }} style={{ width: 305, height: 159 }} /> */}

      <Text style={styles.instructions}> Welcome to Rocket Elevators!</Text>
      <Text style = {{margin:10}}>Please login using your email.</Text>
      <TextInput
      style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
      onChangeText={text => onChangeText(text)}
      value={value}
    />
      {/* <TextInput
        label='Email'
        value={this.state.text}
        onChangeText={text => this.setState({ text })}
      /> */}
      
      <TouchableOpacity>
        {/* onPress={() => alert('Login was sucessful!')} style={styles.button}>
        <Text style={styles.buttonText}>Login!</Text> */}
        <Button style = {{margin:10}}
         icon="login" mode="contained" onPress={() => {if (findArrayElementByTitle(data,value) != undefined) {
           console.log("true")
         } else {
console.log("The email entered is not the email of a listed agent, please try again!")
         }}} > Log in </Button>
      </TouchableOpacity>
 
      {/* <ScrollView> */}
      {/* <Text style={styles.elevatorId}> Elevator ID: {this.state.id}</Text>       */}
      {/* <Text style={styles.elevatorIdText}> {this.state.id} </Text> */}

         {/* </ScrollView> */}
         {isLoading ? <ActivityIndicator/> : (
        <FlatList
          data={data}
          keyExtractor={({ id }, index) => id}
          renderItem={({ item }) => (
            <Text>{item.email}</Text>
            // <Text>{email == item.email ? "RENDER TEXT" : "oui"}</Text>
          )}
        />
      )}
    </View>
  );
// }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
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

  }
});

export default StartupScreen

// style = {{alignItems: "stretch"}}