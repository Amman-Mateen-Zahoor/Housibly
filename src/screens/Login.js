import {
  Image,
  Pressable,
  StatusBar,
  StyleSheet,
  Text,
  View,
  ScrollView,
} from 'react-native';
import React, {useLayoutEffect} from 'react';
import {color, FontFamiy, FontSize} from '../constants/style';
import {hp, wp} from '../utils/utils';
import CustomTextInput from '../components/CustomTextInput';

import CustomButton from '../components/CustomButton';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

const Login = () => {
useLayoutEffect(()=>{
  StatusBar.setHidden(false)
  StatusBar.setTranslucent(true)
  StatusBar.setBackgroundColor("transparent")
},[])
  return (

      <KeyboardAwareScrollView style={styles.mainContainer}>
        <Image
          source={require('../assets/images/logo.png')}
          style={styles.img}
        />
        <Text style={styles.txt}>Housibly</Text>
        <Pressable style={[styles.mainContainerbtnSignIn]}>
          <View style={styles.btnSignIn}>
            <Image
              source={require('../assets/icons/google.png')}
              style={styles.btnSignInIcon}
            />
            <Text style={styles.btnSignIntxt}>Sign up with Google</Text>
          </View>
        </Pressable>
        <Pressable
          style={[styles.mainContainerbtnSignIn, {marginTop: wp(1.5)}]}>
          <View style={styles.btnSignIn}>
            <Image
              source={require('../assets/icons/apple.png')}
              style={styles.btnSignInIcon2}
            />
            <Text style={styles.btnSignIntxt}>Sign up with Apple</Text>
          </View>
        </Pressable>
        <View style={styles.LineContainer}>
          <Text style={styles.line} />
          <Text style={styles.lineTxt}> or </Text>
          <Text style={styles.line} />
        </View>

        <View style={{padding: wp(7)}}>
          <CustomTextInput title={'Email Address'} />
          <CustomTextInput title={'User Name'} />
          <CustomTextInput title={'Password'} secureTextEntry={true} />
          
          <Pressable style={{alignSelf:"flex-end"}}>
            <Text style={styles.forgtePasswordtxt}>Forget Password?</Text>
          </Pressable>
          <Text style={styles.inputBottomtxt1}>
            By creating account, you agree to our
          </Text>
          <View style={styles.inputBottomtxt2Container}>
            <Pressable>
              <Text style={styles.inputBottomtxt2}>Terms & Conditions</Text>
            </Pressable>
            <Text
              style={{color: color.black, fontFamily: FontFamiy.gilroyMedium}}>
              {' '}
              &{' '}
            </Text>
            <Pressable>
              <Text style={styles.inputBottomtxt2}>Privacy Policy</Text>
            </Pressable>
          </View>

          <CustomButton title={'Login'} />

          <View style={styles.btnBottomContainer}>
            <Text style={styles.btnBottomContainertxt1}>
              {' '}
              Don’t have an account?{' '}
            </Text>
            <Pressable>
              <Text style={styles.btnBottomContainertxt2}>Create One</Text>
            </Pressable>
          </View>
        </View>
      </KeyboardAwareScrollView>
   
  
  );
};

export default Login;

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: color.white,
    flex: 1,
    // flexGrow: 1,
  },
  img: {
    width: wp(27),
    height: wp(25),
    alignSelf: 'center',
    resizeMode: 'contain',
    marginTop: wp(18),
  },
  txt: {
    alignSelf: 'center',
    fontSize: wp(6.5),
    fontFamily: FontFamiy.gilroyBold,
    color: color.black,
    marginTop: wp(5),
    marginBottom: wp(4),
  },
  mainContainerbtnSignIn: {
    borderWidth: 1,
    borderColor: color.borderColor,
    borderRadius: wp(7),
    justifyContent: 'center',
    alignItems: 'center',
    height: wp(12),
    width: wp(84),
    alignSelf: 'center',
  },
  btnSignIn: {
    flexDirection: 'row',
  },
  btnSignInIcon: {
    height: wp(5),
    width: wp(5),
  },
  btnSignInIcon2: {
    height: wp(6),
    width: wp(5),
  },
  btnSignIntxt: {
    paddingLeft: wp(3),
    color: color.borderColor,
    fontFamily: FontFamiy.gilroyMedium,
    fontSize: FontSize.l,
  },
  LineContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: wp(4),
  },
  line: {
    height: wp(0.2),
    width: wp(35),
    backgroundColor: color.borderColor,
  },
  lineTxt: {
    color: color.borderColor,
    fontSize: FontSize.xl,
    fontFamily: FontFamiy.gilroyRegular,
  },
  forgtePasswordtxt: {
    fontFamily: FontFamiy.gilroyRegular,
    color: color.red,
   
  },
  inputBottomtxt1: {
    fontFamily: FontFamiy.gilroyRegular,
    color: color.black,
    alignSelf: 'center',
    paddingTop: wp(4),
  },
  inputBottomtxt2: {
    fontFamily: FontFamiy.gilroyBold,
    color: color.selectedLine,
    textDecorationLine: 'underline',
  },
  inputBottomtxt2Container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: wp(4),
  },
  btnBottomContainer: {
    flexDirection: 'row',
    alignSelf: 'center',
    paddingTop: wp(8),
  },
  btnBottomContainertxt1: {
    fontFamily: FontFamiy.gilroySemiBold,
    color: color.black,
  },
  btnBottomContainertxt2: {
    fontFamily: FontFamiy.gilroySemiBold,
    color: color.selectedLine,
    textDecorationLine: 'underline',
    fontSize: FontSize.l,
  },
});
