import {
  Image,
  Pressable,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useLayoutEffect} from 'react';
import {color, FontFamiy, FontSize} from '../constants/style';
import {hp, wp} from '../utils/utils';

const Login = () => {
  useLayoutEffect(() => {
    StatusBar.setHidden(true);
  }, []);
  return (
    <View style={styles.mainContainer}>
      <Image source={require('../assets/images/logo.png')} style={styles.img} />
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
      <Pressable style={[styles.mainContainerbtnSignIn, {marginTop: wp(1.5)}]}>
        <View style={styles.btnSignIn}>
          <Image
            source={require('../assets/icons/apple.png')}
            style={styles.btnSignInIcon}
          />
          <Text style={styles.btnSignIntxt}>Sign up with Apple</Text>
        </View>
      </Pressable>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: wp(4),
        }}>
        <Text
          style={{
            height: wp(0.2),
            width: wp(35),
            backgroundColor: color.borderColor,
          }}
        />
        <Text
          style={{
            color: color.borderColor,
            fontSize: FontSize.xl,
            fontFamily: FontFamiy.gilroyRegular,
          }}>
          {' '}
          or{' '}
        </Text>
        <Text
          style={{
            height: wp(0.2),
            width: wp(35),
            backgroundColor: color.borderColor,
          }}
        />
      </View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: color.white,
    flex: 1,
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
  btnSignIntxt: {
    paddingLeft: wp(3),
    color: color.borderColor,
    fontFamily: FontFamiy.gilroyMedium,
    fontSize: FontSize.l,
  },
});
