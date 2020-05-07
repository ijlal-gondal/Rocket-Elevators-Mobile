import React,{useState,useEffect} from 'react';
import { ActivityIndicator,FlatList,Image, StyleSheet, Text, View, TouchableOpacity, ScrollView} from 'react-native';
import {  Appbar, Button} from 'react-native-paper';
const HomeScreen=()=> {


        const [isLoading, setLoading] = useState(true);
        const [data, setData] = useState([]);

      useEffect(()=>{
          fetch('https://tranquil-reaches-97237.herokuapp.com/api/elevators')
            .then((response) => response.json())
            .then((json) => setData(json))
            .catch((error) => console.error(error))
            .finally(() => setLoading(false));
        }, []);
// render() {
   //   // console.log("from render") 

    return (
        <View>

    


          {/* <ScrollView>   </ScrollView> */}

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

         
         </View>
    )
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
  
    }
  });

export default HomeScreen