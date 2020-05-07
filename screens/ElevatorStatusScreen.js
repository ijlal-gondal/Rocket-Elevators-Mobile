import React,{useState,useEffect} from 'react';
import { ActivityIndicator,FlatList,Image, StyleSheet, Text, View, TouchableOpacity, ScrollView} from 'react-native';
import {  Appbar, Button} from 'react-native-paper';

const ElevatorStatusScreen=()=> {


    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([]);
    var id = 2;
useEffect(()=>{
      fetch(`https://tranquil-reaches-97237.herokuapp.com/api/elevators/${id}`)
        .then((response) => response.json())
        .then((json) => setData(json))
        .catch((error) => console.error(error))
        .finally(() => setLoading(false));                      
    }, []);

function updateStatus() {
    fetch(`https://tranquil-reaches-97237.herokuapp.com/api/elevators/${id}`, {
        method: 'POST',
        headers: new Headers({
                   'Content-Type': ' application/json', // <-- Specifying the Content-Type
          }),
        body: JSON.stringify({
            status: 'Active'
          })
          // <-- Post parameters
      })
      .then((response) => response.text())
      .then((responseText) => {
        alert(responseText);
      })
      .catch((error) => {
          console.error(error);
      });
    };

console.log(data)
    return (
        <View>
<Text> Hello from ElevatorStatusScreen</Text>
      {/* <ScrollView>
       <Text style={styles.elevatorId}> Elevator ID: {this.state.id}</Text>      
       <Text style={styles.elevatorIdText}> {this.state.id} </Text>

         </ScrollView> */}
      <Button style={styles.buttonText}
    icon="switch" mode="outlined" onPress={() => updateStatus()}>
 Change Status
  </Button>  

{isLoading ? <ActivityIndicator/> : (

<FlatList
  data={data}
  keyExtractor={({ id }, index) => id}
  renderItem={({ item }) => (
    <Button style={styles.buttonText}
    icon="login" mode="outlined" onPress={() => console.log(item.id,item.status)}>
 {item.id}
  </Button>

  )}
/>
)}

<Button style={styles.buttonText}
    icon="logout" mode="outlined" onPress={() => navigation.goBack()}>
 Back
  </Button>  
</View>
    );
}
// }

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      // alignItems: 'center',
      // justifyContent: 'center',
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
  
  

export default ElevatorStatusScreen