import 'react-native-gesture-handler';
import React,{useState,useEffect} from 'react';
import { ActivityIndicator,FlatList,Image, StyleSheet, Text, View, TouchableOpacity, ImageBackground, ScrollView} from 'react-native';
import {  FAB, Appbar, Button} from 'react-native-paper';
import image from './assets/splash.jpg';  

const HomeScreen=(props)=> {


        const [isLoading, setLoading] = useState(true);
        const [data, setData] = useState([]);

      useEffect(()=>{
          fetch('https://tranquil-reaches-97237.herokuapp.com/api/elevators')
            .then((response) => response.json())
            .then((json) => setData(json))
            .catch((error) => console.error(error))
            .finally(() => setLoading(false));
        }, []);


    return (
        <View>

{/* <ImageBackground source={image} style={styles.image}> */}
<Button icon="logout" mode="contained" onPress={() => props.navigation.navigate('Startup')}>
   Log Out!
  </Button>

  <TouchableOpacity>
  {/* <FAB
    style={styles.fab}
    label = "Logout"
    icon="logout"
    onPress={() => console.log('Pressed')}
  /> */}

           {/* <ScrollView>   */}
        
{isLoading ? <ActivityIndicator/> : (

        <FlatList
          data={data}
          keyExtractor={({ id }, index) => id}
          renderItem={({ item }) => (
            <Button style={styles.buttonText}
            icon="login" mode="outlined" onPress={() => {
                // onPress event fires with an event object
                props.navigation.navigate('ElevatorStatus', {
                    id: item.id });
            }}>
         {item.id}
          </Button>

          )}
        />
      )}


  </TouchableOpacity>
 {/* </ScrollView>  */}
 {/* </ImageBackground> */}
         </View>
    )
}


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
    button: {
      backgroundColor: "blue",
      padding: 20,
      borderRadius: 5,
    },
    buttonText: {
      fontSize: 20,
      color: '#fff',
      padding: 10,
      borderRadius: 5
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
    fab: {
        position: 'absolute',
        margin: 16,
        right: 10,
        top: 130
        ,
      },
      image: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center"
      }
  });

export default HomeScreen