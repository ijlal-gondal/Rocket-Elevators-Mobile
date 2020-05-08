import 'react-native-gesture-handler';
import React,{useState,useEffect} from 'react';
import { ActivityIndicator,ImageBackground,Image, StyleSheet, Text, View, TouchableOpacity, ScrollView} from 'react-native';
import {  Appbar, Button} from 'react-native-paper';
import image from './assets/splash.jpg';  

const ElevatorStatusScreen=(props)=> {

    const { id } = props.route.params;
    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([]);

// function checkStatus() {
useEffect(()=>{
      fetch(`https://tranquil-reaches-97237.herokuapp.com/api/elevators/${id}`)
        .then((response) => response.json())
        .then((json) => setData(json))
        .catch((error) => console.error(error))
        .finally(() => setLoading(false));                      
    }, [data]);

useEffect(() => {
        return () => {
          console.log("cleaned up");
        };
      }, []);
// }

function getMoviesFromApi() {
    return fetch('https://reactnative.dev/movies.json')
      .then((response) => response.json())
      .then((json) => {
        return json.movies;
      })
      .catch((error) => {
        console.error(error);
      });
  }
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
        alert(responseText),
        getMoviesFromApi();
      })
      .catch((error) => {
          console.error(error);
      });
    };

// console.log(data)
    return (
        <View>
              <TouchableOpacity>
{/* <ImageBackground source={image} style={styles.image}> */}


{isLoading ? <ActivityIndicator/> : (
    <Text  style={[
        styles.status,
        data.status == "Inactive" ?
        { backgroundColor: 'red' } 
        : { backgroundColor: 'green' }
    ]}>
{data.status}
  </Text>

  )}


{/* 
{isLoading ? <ActivityIndicator/> : (
    <Text style={styles.newstatus} onPress={console.log(json.movies)}>
{json.movies}
  </Text>

  )} */}


      <Button style={styles.buttonText}
    icon="switch" mode="outlined" onPress={() => updateStatus()}>
 End Task
  </Button>  



<Button style={styles.buttonText}
    icon="logout" mode="outlined" onPress={() => props.navigation.navigate("Home")}>
 Back
  </Button>  
  </TouchableOpacity>
   {/* </ImageBackground> */}
</View>
    );
}
// }

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    instructions: {
      color: '#888',
      fontSize: 18,
      margin: 15,
  
    }, 
    status: {
      padding: 20,
      borderRadius: 5,
      color: "white",
      textAlign: "center",
      fontWeight: "bold",
      fontSize: 20,
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
  
  

export default ElevatorStatusScreen