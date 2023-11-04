import axios from "axios";
const API_URL = 'http://10.0.2.2:5000/'

export const getBookings = async() => {
   try {
    const response = await axios.get('http://10.0.2.2:5000/bookings');
    console.log(response.data)
    return response.data;
   } catch (error) {
    console.error('Error fetching bookings:', error);
    return [];
   }
}

