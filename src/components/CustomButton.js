import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { color, FontFamiy, FontSize } from '../constants/style'
import { wp } from '../utils/utils'

const CustomButton = (

    {
        onPress,
        title,
        style
    }

) => {
  return (
   
      <TouchableOpacity
      onPress={onPress}
      style={[styles.btn,style]}>
        <Text 
        style={styles.btntext}
        >{title}</Text>
      </TouchableOpacity>
 
  )
}

export default CustomButton

const styles = StyleSheet.create({

    btn:{
        height:wp(12),
        borderRadius:wp(10),
        justifyContent:'center',
        backgroundColor:color.blue,
        // marginTop:wp(5),
        alignItems:'center',
        flexDirection:"row"
    },
    btntext:{
      textAlign:'center',
      color:color.white,
      fontFamily:FontFamiy.gilroyRegular,
      fontSize:FontSize.l

    }
})