import React, { useEffect, useState } from 'react';
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';

import data from '../data/data.json';
import { PlacesModel } from '../model/PlacesModel';



const Places = () => {

  const [places, setPlaces] = useState<PlacesModel[]>([]);

  console.log(data.destinations);
  
  useEffect( () => {
    setPlaces(data.destinations);
  }, []);

  return (
    <ScrollView>
      <Text style={styles.heading}>Places</Text>
      <View style = {styles.container}>
       
          {places.length > 0 ? (places.map((place) => (
            <View key={place.id} style={styles.placeCard}>
              <Image 
              source={
                {uri : place.image}
              }

              style={styles.placeImages}

              />
              <Text style={styles.placeName}>{place.name}</Text>
              <Text style={styles.placeDescription}>{place.description}</Text>
              <Text style={styles.placeRating}>Rating: {place.rating}</Text>
            </View>
          ))): (
            <Text>Loading..</Text>
          )}
       
        
      </View>
    </ScrollView>
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