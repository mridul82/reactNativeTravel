import React, { useEffect, useState } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';

import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../App';
import { getBookings } from '../api/booking';
import { BookingModel } from '../model/BookingModel';

type ViewBookingProps = NativeStackScreenProps<RootStackParamList, 'ViewBooking'>

const ViewBooking = ({navigation}:ViewBookingProps) => {

    const [bookings, setBookings] = useState<BookingModel[]>([]);

    
    useEffect(() => {
    
        const fetchBookins = async() => {
            const bookingData = await getBookings();
            setBookings(bookingData);
        }
        
    fetchBookins()
      
    }, [])
    
    

    return (
        <ScrollView style={styles.container}>
          <Text style={styles.title}>Bookings</Text>
          {bookings.length > 0 ? bookings.map(booking => (
            <View key={booking._id} style={styles.bookingCard}>
              <Text style={styles.textstyle}>Name: {booking.name}</Text>
              <Text style={styles.textstyle}>Email: {booking.email}</Text>
              <Text style={styles.textstyle}>Phone: {booking.phone}</Text>
              {/* Add more details here */}
            </View>
          )): (
            <Text>Loading..</Text>
          )}
        </ScrollView>
      );
}

export default ViewBooking

const styles = StyleSheet.create({

    container: {
        flex: 1,
        padding: 10,
        backgroundColor: '#f0f0f0',
      },
      title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
      },
      bookingCard: {
        backgroundColor: '#fff',
        padding: 10,
        borderRadius: 5,
        marginBottom: 10,
        borderWidth: 1,
        borderColor: '#ccc',
        elevation: 4,
        
      },
      textstyle : {
        color: '#000000',
        fontSize: 18,
      }

})