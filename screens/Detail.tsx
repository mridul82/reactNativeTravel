import React, { useEffect, useState } from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';


import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../App';

import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';


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
    
      <View style={styles.container}>
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
    </View>
      
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
    width: 400,
    height: 400,
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
  // Add styles for other properties as needed
});