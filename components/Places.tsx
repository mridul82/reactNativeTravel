import React, { useEffect, useState } from 'react';
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import data from '../data/data.json';
import { PlacesModel } from '../model/PlacesModel';


// import { createNativeStackNavigator } from '@react-navigation/native-stack';


const Places = ({navigation}: any) => {



  const [places, setPlaces] = useState<PlacesModel[]>([]);

//  console.log(data.destinations);
  
  useEffect( () => {
    setPlaces(data.destinations);
  }, []);

  

  return (
    <View>
      <Text style={styles.heading}>Trending Places..</Text>
      <ScrollView>

      <View style = {styles.container}>
       
          {places.length > 0 ? (places.map((place) => (
            <TouchableOpacity key={place.id} style={styles.placeCard}
            onPress={() => navigation.navigate('Detail', {placeId: place.id})}
            >
              <Image 
              source={
                {uri : place.image}
              }

              style={styles.placeImages}

              />
              <Text style={styles.placeName}>{place.name}</Text>
              <Text style={styles.placeDescription}>{place.description}</Text>
              <Text style={styles.placeRating}>Rating: {place.rating}</Text>
            </TouchableOpacity>
          ))): (
            <Text>Loading..</Text>
          )}
       
        
      </View>
      </ScrollView>

    </View>
  )
}

export default Places

const styles = StyleSheet.create({
  heading: {
    padding: 8,
    fontSize : 24,
    fontWeight: '500',
    },

    container: {
      backgroundColor : '#e9f5f9'
    },

    placeCard : {
      height : 280,
      elevation: 6,
      shadowOffset : {
        height :1,
        width : 1
      },
      shadowColor : '#000000',
      padding: 6,
      margin: 5,
      backgroundColor : '#ffffff',
      borderRadius: 6,
      borderWidth: 1,
    borderColor: '#ccc',
    },

    placeImages : {
      height : 200,
      borderRadius: 6
    },
    placeName : {
      fontSize: 18,
    fontWeight: '500',
      color : '#000000'
    },
    placeDescription : {
      fontSize: 14,
    color: '#777',
    },
    placeRating : {
      fontSize: 16,
    fontWeight: 'bold',
    color: 'green',
    }

})