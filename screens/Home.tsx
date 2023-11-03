import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import Places from '../components/Places';

//import { useNavigation } from '@react-navigation/native';

import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../App';

type HomeProps = NativeStackScreenProps<RootStackParamList, 'Home'>

const Home = ({navigation}: HomeProps) => {
  


  return (
    <SafeAreaView>      
      <Places navigation={navigation} />
    </SafeAreaView>
  )
}

export default Home

const styles = StyleSheet.create({})