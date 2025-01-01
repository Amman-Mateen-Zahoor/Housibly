import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  Touchable,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useRef, useState} from 'react';
import {color, FontFamiy, FontSize} from '../constants/style';
import {wp} from '../utils/utils';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Colors } from 'react-native/Libraries/NewAppScreen';
const CustomTextInput = ({
    title,
    secureTextEntry

}) => {
  const [visiblePassword, SetVisiblePassword] = useState(true);
 
  const source = [
    require('../assets/icons/eyeclose.png'),
    require('../assets/icons/eyeopen.png'),
  ];
  const inputElement = useRef()
  const focusInput =() =>{
    inputElement.current.focus();
  };
  return (
    <View
 >
      <Text
        style={styles.label}>
        {title}
      </Text>
      
 <Pressable onPress={focusInput} style={styles.textinput}>
  
        <TextInput
          placeholder="Start typing..."
          placeholderTextColor={color.palceholder}
          secureTextEntry={secureTextEntry && visiblePassword}
          style={{flex:1}}
          ref={inputElement}
        />
        {secureTextEntry && (
          <TouchableOpacity
            onPress={() => SetVisiblePassword(!visiblePassword)}
            style={{padding:wp(1)}}
            >
            <Icon
              name={visiblePassword ? 'eye-off' : 'eye'}
              size={wp(5)}
              color={color.palceholder}
              
            />
          </TouchableOpacity>
        )}
        
      </Pressable>
      
     
    </View>
  );
};

export default CustomTextInput;

const styles = StyleSheet.create({
    label:{
        fontFamily: FontFamiy.gilroyBold,
        color: color.black,
        fontSize: FontSize.l,
        marginBottom: wp(3),
      },
      textinput:{
       
        flexDirection: 'row',
        backgroundColor: color.unSelectline,
        height: wp(14),
        marginBottom:wp(4),
        paddingLeft: wp(6),
        paddingRight: wp(6),
        borderRadius: wp(7),
        justifyContent: 'space-between',
        alignItems: 'center',
      },
});
