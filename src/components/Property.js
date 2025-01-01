import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {color, FontFamiy, FontSize} from '../constants/style';
import {wp} from '../utils/utils';
import Icon from 'react-native-vector-icons/Entypo';
import Icon2 from 'react-native-vector-icons/FontAwesome';
import Icon3 from 'react-native-vector-icons/AntDesign';
const Property = () => {
  return (
    <View style={styles.main}>
      <View style={styles.banner}>
        <Image
          source={require('../assets/images/house.png')}
          style={styles.bannerImage}
        />
        <View style={styles.bannerTextContainer}>
          <Text numberOfLines={1} style={styles.bannerTxt1}>
            Luxury House
          </Text>
          {/* <Text style={styles.bannerTxt2}>Corporate Home X</Text>
              <Text style={[styles.bannerTxt2,{marginTop:10}]}>Home Inspector</Text> */}
          <View style={{flexDirection: 'row', flex: 1, marginTop: wp(2)}}>
            <Text style={styles.bannerTxtPrice}>$25,000 </Text>
            <Text style={styles.line} />
            <Image
              source={require('../assets/images/bed.png')}
              style={styles.bannerImageIcon}
            />
            <Text style={[styles.bannerTxtPrice]}>4</Text>
            <View style={{marginLeft: wp(2)}}>
              <Icon2 name={'bathtub'} size={wp(4.2)} color={color.black} />
            </View>
            <Text style={[styles.bannerTxtPrice, {marginLeft: wp(1)}]}>
              3.5
            </Text>
          </View>
          <View style={{flexDirection: 'row', flex: 1}}>
            <Icon3 name={'heart'} size={wp(5)} color={color.red} />
            <Text
              style={[
                styles.bannerTxtPrice,
                {marginLeft: wp(1), color: color.red},
              ]}>
              90% match
            </Text>
          </View>

         <Text style={[styles.bannerTxtPrice,{color:'#A7A7A7'}]}>Last active: 3 days ago</Text>
        </View>
        <View style={styles.bannerIcon}>
         <Text style={styles.bannerIconTxt}>New</Text>
        </View>
      </View>
    </View>
  );
};

export default Property;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: color.white,
    padding: wp(4),
  },
  banner: {
    flexDirection: 'row',
    padding: wp(2),

    width: wp(90),
    borderRadius: wp(5),
  },
  bannerImage: {
    height: wp(25),
    width: wp(25),
    borderRadius: wp(4),
  },
  bannerTextContainer: {
    marginVertical: wp(1),
    marginHorizontal: wp(3),
    flex: 1,
  },
  bannerTxt1: {
    fontFamily: FontFamiy.gilroySemiBold,
    color: color.black,
    fontSize: FontSize.xxl,
  },
  bannerTxtPrice: {
    fontFamily: FontFamiy.gilroyRegular,
    color: color.black,
    fontSize: FontSize.m,
  },
  bannerIcon: {
    backgroundColor: color.red,
    height: wp(6),
    width: wp(11),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: wp(2),
  },
  line: {
    marginTop: wp(1),
    height: wp(3.5),
    width: wp(0.3),
    backgroundColor: color.black,
  },
  bannerImageIcon: {
    height: wp(5),
    width: wp(5),
    resizeMode: 'contain',
    marginHorizontal: wp(1),
  },
  bannerIconTxt:{color:color.white,fontFamily:FontFamiy.gilroyRegular,fontSize:FontSize.m}
});
