import React from 'react';
import { Image, StyleSheet, Text, View, TouchableOpacity, ScrollView} from 'react-native';
import logo from './assets/logo.png'; 
import { TextInput, Appbar, Button} from 'react-native-paper';

export default class StartupScreen extends React.Component {


state={
  id: "Loading",
  textinput: ''
}

// componentDidMount(){
// fetch("https://tranquil-reaches-97237.herokuapp.com/api/elevators")
// .then(data=>data.json())
// .then(data2=>{
//   // console.log(data2)
//   this.setState({
//     id:data2[0].id


//   })
// })
// }
render() {
  // console.log("from render")
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

<Image source={logo} style={styles.logo} /> 
{/* <Image source={{ uri: "https://i.imgur.com/TkIrScD.png" }} style={{ width: 305, height: 159 }} /> */}

      <Text style={styles.instructions}> Welcome to Rocket Elevators!</Text>
      <Text style = {{margin:10}}>Please login using your email.</Text>
      <TextInput
        label='Email'
        value={this.state.textinput}
        onChangeText={text => this.setState({ text })}
      />
      <TouchableOpacity>
        {/* onPress={() => alert('Login was sucessful!')} style={styles.button}>
        <Text style={styles.buttonText}>Login!</Text> */}
        <Button style = {{margin:10}}
         icon="login" mode="contained" onPress={() => console.log('Pressed')}> Log in </Button>
      </TouchableOpacity>
      
      {/* <ScrollView> */}
      {/* <Text style={styles.elevatorId}> Elevator ID: {this.state.id}</Text>       */}
      {/* <Text style={styles.elevatorIdText}> {this.state.id} </Text> */}

         {/* </ScrollView> */}
    </View>
  );
}
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


// style = {{alignItems: "stretch"}}