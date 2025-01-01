import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import React, {useLayoutEffect, useState} from 'react';
import {color, FontFamiy, FontSize} from '../constants/style';
import {wp} from '../utils/utils';
import Icon from 'react-native-vector-icons/AntDesign';
import {
  CodeField,
  useBlurOnFulfill,
  useClearByFocusCell,
} from 'react-native-confirmation-code-field';
import CustomButton from '../components/CustomButton';

const CELL_COUNT = 6;

const VerificationScreen = () => {
  const [value, setValue] = useState('');
  const ref = useBlurOnFulfill({value, cellCount: CELL_COUNT});
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });
  return (
    <View style={styles.main}>
      <View style={{flexDirection: 'row'}}>
        <Image
          source={require('../assets/images/logo.png')}
          style={styles.img}
        />
        <Text style={styles.txt}>Housibly</Text>
      </View>
      <View style={{flexDirection: 'row', marginTop: wp(5)}}>
        <Icon name={'arrowleft'} size={wp(8)} color={color.black} />
        <Text style={styles.txt2}>Verify Verification Code</Text>
      </View>
      <CodeField
        ref={ref}
        {...props}
        // Use `caretHidden={false}` when users can't paste a text value, because context menu doesn't appear
        autoFocus={true}
        value={value}
        onChangeText={setValue}
        cellCount={CELL_COUNT}
        rootStyle={styles.codeFieldRoot}
        keyboardType="number-pad"
        textContentType="oneTimeCode"
        autoComplete={Platform.select({
          android: 'sms-otp',
          default: 'one-time-code',
        })}
        testID="my-code-input"
        renderCell={({index, symbol, isFocused}) => (
          // console.log('index',index,'sym',symbol,'isfoc',isFocused,'hhhhh')
          <Text
            key={index}
            style={[styles.cell, isFocused && styles.focusCell]}
            onLayout={getCellOnLayoutHandler(index)}>
            {symbol}
          </Text>
        )}
      />
      <Text style={styles.otpTxt}>
        Please enter your verification code sent to your email{'\n'}account
      </Text>
      <CustomButton
      title={'Verify Code'}
      style={styles.btn}
      />
      <View style={styles.bottomTxt}>
        <Text>Didn’t recived a code?{' '}</Text>
        <Pressable>
            <Text style={{color:color.blue,textDecorationLine:'underline'}}>Resend</Text>
        </Pressable>
         </View>
    </View>
  );
};

export default VerificationScreen;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: color.white,
    padding: wp(4),
  },
  img: {
    width: wp(7),
    height: wp(7),
    resizeMode: 'contain',
  },
  txt: {
    fontSize: FontSize.xl,
    fontFamily: FontFamiy.gilroyBold,
    color: color.black,
    marginLeft: wp(3),
  },
  txt2: {
    fontSize: FontSize.xxl,
    fontFamily: FontFamiy.gilroyBold,
    color: color.black,
    marginLeft: wp(3),
  },
  codeFieldRoot: {marginTop: wp(15)},
  cell: {
    width: wp(12),
    height: wp(12),
    lineHeight: wp(11),
    fontSize: FontSize.xxxl,
    backgroundColor: color.unSelectline,
    borderColor: color.unSelectline,
    textAlign: 'center',
    borderWidth: 1,
    borderRadius: wp(3),
  },
  focusCell: {
    borderColor: color.blue,
    color: color.blue,
  },
  otpTxt: {
    fontFamily: FontFamiy.gilroyRegular,
    color: color.black,
    marginTop: wp(5),
    fontSize: FontSize.m,
  },
  btn:{marginHorizontal:wp(3),marginTop:wp(35)},
  bottomTxt:{flexDirection:'row',fontFamily:FontFamiy.gilroyRegular,alignSelf:'center',marginTop:wp(2)},
});
