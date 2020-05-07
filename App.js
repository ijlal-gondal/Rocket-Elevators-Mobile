 import 'react-native-gesture-handler';
import React from 'react';
import { Image, StyleSheet, Text, View, TouchableOpacity, ScrollView, Button} from 'react-native';
import logo from './assets/logo.png'; 
import { TextInput, Appbar} from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import  StartupScreen from './screens/StartupScreen'
import  HomeScreen from './screens/HomeScreen'
import  ElevatorStatusScreen from './screens/ElevatorStatusScreen'

const Stack = createStackNavigator();

function App() {
  return (
     <View style={styles.container}>
      <Stack.Navigator>
         <Stack.Screen name="Startup" component={StartupScreen} />
         <Stack.Screen name="Home" component={HomeScreen} />
         <Stack.Screen name="ElevatorStatus" component={ElevatorStatusScreen} />
      </Stack.Navigator>
</View>
  );
}

export default ()=>{
  return(
    <NavigationContainer>
<App/>
    </NavigationContainer>
  )
}

{/* <StartupScreen /> */}
{/* <HomeScreen /> */}
{/* <ElevatorStatusScreen /> */}


// function StartupScreen({ navigation }) {
//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       <Text>Startup Screen</Text>
//         <Button
//         title="Log In"
//         onPress={() => navigation.navigate('Home')}
//       />
//     </View>
//   );
// }

// function HomeScreen({ navigation }) {
//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       <Text>Home Screen</Text>
//       <Button
//         title="Elevator Status"
//         onPress={() => navigation.navigate('ElevatorStatus')}
//       />
//       <Button
//         title="Log Out"
//         onPress={() => navigation.navigate('Startup')}
//       />
//     </View>
//   );
// }

// function ElevatorStatusScreen({ navigation }) {
//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       <Text>Startup Screen</Text>
//       <Button title="Back" onPress={() => navigation.goBack()} />
//     </View>
//   );
// }



// function App() {
//   return (
//     <NavigationContainer>
//     <Stack.Navigator>
//         <Stack.Screen name="Startup" component={StartupScreen} />
//         {/* <Stack.Screen name="Home" component={HomeScreen} /> */}
//         {/* <Stack.Screen name="ElevatorStatus" component={ElevatorStatusScreen} /> */}
//       </Stack.Navigator>
//       </NavigationContainer>
//   );
// }

// export default App;

// class App extends React.Component {







//   return (
//     <View style={styles.container}>
//       <Appbar.Header>
//         <Appbar.BackAction
//           onPress={this._goBack}
//         />
//         <Appbar.Content
//           title="Rocket Elevators"
//         />
//         {/* <Appbar.Action icon="magnify" onPress={this._handleSearch} />
//         <Appbar.Action icon="dots-vertical" onPress={this._handleMore} /> */}
//       </Appbar.Header>

// <Image source={logo} style={styles.logo} /> 
// {/* <Image source={{ uri: "https://i.imgur.com/TkIrScD.png" }} style={{ width: 305, height: 159 }} /> */}

//       <Text style={styles.instructions}> Welcome to Rocket Elevators!</Text>
//       <Text style = {{margin:10}}>Please login using your email.</Text>
//       <TextInput
//         label='Email'
//         value={this.state.textinput}
//         onChangeText={text => this.setState({ text })}
//       />
//       <TouchableOpacity>
//         {/* onPress={() => alert('Login was sucessful!')} style={styles.button}>
//         <Text style={styles.buttonText}>Login!</Text> */}
//         <Button style = {{margin:10}}
//          icon="login" mode="contained" onPress={() => console.log('Pressed')}> Log in </Button>
//       </TouchableOpacity>
      

//     </View>
//   );
// }
// }

// export default App;


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