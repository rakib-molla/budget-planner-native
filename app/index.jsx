import { View, Text, StyleSheet, Button, Linking } from 'react-native'
import React, { useEffect } from 'react'
import { Link, useRouter } from 'expo-router'
import services from '../utils/services'

export default function Home() {

  const router = useRouter();

  useEffect(()=>{
    checkUserAuth();
  }, []);

  // check user is already authenticated or not
  const checkUserAuth = async()=>{
    const result = await services.getData('login');
    console.log('result', result);
    if(result !=='true'){
      router.replace('/login');
    }
  }

  return (
    <View>
      <Text style={styles.text}>Home page</Text>
      <Link href={'/login'} asChild><Button title='Details'/></Link>
    </View>
  )
}

const styles = StyleSheet.create({
   text:{
      fontSize: 50,
      color: 'white',
      fontWeight: 'bold',
      backgroundColor:'blue',
   }
})