import React from 'react';
import {StyleSheet, Text, View, Image } from 'react-native';
import {RectButton } from 'react-native-gesture-handler';
import { Entypo, MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

import globe from "../../images/earth.png";
import arrow from '../../images/left-arrow.png';

export default function Title({action}){
  // let show = action ? true : false;
  const { goBack } = useNavigation();

  function handleGoBack(){
      goBack();
  }

  return(
    <View style={styles.conteiner}>
      <View style={styles.content}>
        {action && (<RectButton onPress={handleGoBack}><Image style={styles.icons}source={arrow}/></RectButton>)}
        <View style={styles.title}>
          <Text style={styles.titleText}>Que País é Esse?</Text>
          <Image source={globe} style={[styles.iconTitle]}/>
        </View>    
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  conteiner: {
    width: "100%",
    paddingVertical: 20,
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 30
  },
  content: {
    width: '85%',
    flexDirection: 'row',
    // backgroundColor: 'gray',
    justifyContent: 'space-evenly',
    alignItems: 'center'
  },
  icons: {
    width: 20,
    height: 20,
  },
  title: {
    
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    // backgroundColor: 'green'

  },
  titleText:{
    fontSize: 30,
    fontWeight: 'bold',
    color: 'purple',
    flexDirection: 'row',
    justifyContent: 'center'
  },
  iconTitle: {
    marginLeft: 10,
    height: 30,
    width: 30
  }
});