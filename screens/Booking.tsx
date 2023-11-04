import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';


import { NativeStackScreenProps } from '@react-navigation/native-stack';
import axios from 'axios';
import { RootStackParamList } from '../App';

type BookingProps = NativeStackScreenProps<RootStackParamList, 'Booking'>

const Booking = ({navigation}: BookingProps) => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [isLoading, setIsLoading] = useState(false);
   

   const handleBooking = async () => {
    console.log('Booking request sent:', { name, email, phone });
    isLoading;

    const bookingData = { name, email, phone };

    await axios.post('http://10.0.2.2:5000/bookings', bookingData)
        .then((response: { data: any }) => {
            console.log(response.data);

            if(response.data) {
               // Alert.alert(` You have created: ${JSON.stringify(response.data)}`);
                setIsLoading(false);
                setName("");
                setEmail("");
                setPhone("");
            }
            navigation.pop();
        })
    .catch((error: any) => {
        console.log(error)
    })

   }

 
  return (
    <View style={styles.container}>
      <Text style={styles.TextHeading}>Book Your Place</Text>

      <TextInput
        style={styles.inputtext}
        placeholder='Name'
        value={name}
        onChangeText={(text) => setName(text)}
      />
      <TextInput
        style={styles.inputtext}
        placeholder='Email'
        value={email}
        onChangeText={(text) => setEmail(text)}
      />
      <TextInput
        style={styles.inputtext}
        placeholder='Phone'
        value={phone}
        onChangeText={(text) => setPhone(text)}
      />



    <TouchableOpacity style={styles.bookButton} onPress={handleBooking}>
        <Text style={styles.buttonText}>Book Now</Text>
      </TouchableOpacity>

    </View>
  )
}

export default Booking

const styles = StyleSheet.create({
    container : {
        flex: 1,
        alignItems: 'center',        
        padding: 25,
            
       
    },
    TextHeading : {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#000000',
        marginBottom: 50,
    },
    inputtext : {
        height: 50,
        width: '100%',
        borderWidth: 1,
        borderRadius: 8,
        paddingHorizontal: 10,
        marginBottom: 20,
    },
    bookButton: {
        backgroundColor: '#0e8ae8',
        padding: 15,
        borderRadius: 8,
      },
      buttonText: {
        color: 'white',
        textAlign: 'center',
        fontSize: 16,
      },
})