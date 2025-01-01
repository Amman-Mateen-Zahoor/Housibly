import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { color, FontFamiy, FontSize } from '../constants/style'
import { hp, wp } from '../utils/utils'
import Icon from 'react-native-vector-icons/Entypo';

const BannerPractice = () => {
  return (
    <View style={styles.container}>
      <View style={styles.banner}>
        <Image
        source={require('../assets/images/profile.png')}
        style={styles.bannerImage}
        />
        <View style={styles.bannerTextContainer}>
        <Text 
        numberOfLines={1}
        style={styles.bannerTxt1}>Harden Eusaff gygfcgtdx fdgtftf fdtdtfcvgfcg</Text>
        <Text style={styles.bannerTxt2}>Corporate Home X</Text>
        <Text style={[styles.bannerTxt2,{marginTop:10}]}>Home Inspector</Text>
      </View>
      <View style={styles.bannerIcon}>
      <Icon
                    name={'dots-three-horizontal'}
                    size={wp(5)}
                    color={color.white}
                    
                  />
                  </View>
      </View>
      
    </View>
  )
}

export default BannerPractice

const styles = StyleSheet.create({
  container:{
    flex:1,

    backgroundColor:color.white,
    padding:wp(5)
  },
banner:{
  backgroundColor:"#9C69DD",
  flexDirection:'row',
  padding:wp(2),
  
  width:wp(90),
  borderRadius:wp(5)
},
bannerImage:{
  height:wp(25),
  width:wp(25),
  borderRadius:wp(4)
},
bannerTextContainer:{
  
  marginVertical:wp(1),
  marginHorizontal:wp(3),
  flex:1
},
bannerTxt1:{
  fontFamily:FontFamiy.gilroySemiBold,
  color:color.white,
  fontSize:FontSize.xxl,
  
  },
  bannerTxt2:{
    
    fontFamily:FontFamiy.gilroySemiBold,
    color:color.white,
    fontSize:FontSize.m1,
    },
    bannerIcon:{
      backgroundColor:'#B88BF0',
      height:wp(10),
      width:wp(10),
      justifyContent:'center',
      alignItems:'center',
      borderRadius:wp(2),
      
    }
})