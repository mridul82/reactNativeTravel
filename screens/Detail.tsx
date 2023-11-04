import React, { useEffect, useState } from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../App';

import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';


import { GestureHandlerRootView, TouchableOpacity } from 'react-native-gesture-handler';
import data from '../data/data.json';


type DetailProps = NativeStackScreenProps<RootStackParamList, 'Detail'>


const Detail = ({route}:DetailProps) => {
  const { placeId } = route.params
  const [placeDetails, setPlaceDetails] = useState<any>(null);

  const fetchPlaceDetails = async (id: number) => {
    const placeDetail = data.destinations.find((place) => place.id === id);
    console.log(placeDetail);
    return setPlaceDetails(placeDetail);
  }

  useEffect( () => {
    fetchPlaceDetails(placeId);
  }, [placeId]);

  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>()
  return (
    
    
      <GestureHandlerRootView style={styles.container}>
      {placeDetails ? (
        <>
          <Image source={{ uri: placeDetails.image }} style={styles.image} />
          <Text style={styles.title}>{placeDetails.name}</Text>
          <Text style={styles.description}>{placeDetails.description}</Text>
          <Text style={styles.rating}>Rating: {placeDetails.rating}</Text>
          {/* Display other details */}
          
        </>
      ) : (
        <Text>Loading...</Text>
      )}
<View style={styles.buttonContaier}>
<TouchableOpacity style={styles.bookButton} onPress={()=> navigation.navigate('Booking')}>
        <Text style={styles.buttonText}>Book This Place</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.bookButton} onPress={()=> navigation.navigate('ViewBooking')}>
        <Text style={styles.buttonText}>View Bookings</Text>
      </TouchableOpacity>
</View>

    </GestureHandlerRootView>
      
  )
}

export default Detail

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    flex: 1,
    width: 500,
    height: 500,
    resizeMode: 'cover',
       
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  description: {
    fontSize: 16,
  },
  rating: {
    fontSize: 18,
    fontWeight: 'bold',
  },

  bookButton: {
    backgroundColor: '#0e8ae8',
    padding: 10,
    borderRadius: 8,
    marginTop: 20,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 16,
  },
  buttonContaier : {    
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 100,
    width: 300
  }
  // Add styles for other properties as needed
});