import {
  Image,
  Pressable,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useLayoutEffect, useState} from 'react';
import {color, FontFamiy, FontSize} from '../constants/style';
import {hp, wp} from '../utils/utils';
import CustomButton from '../components/CustomButton';

const Splash = ({navigation}) => {
  useLayoutEffect(() => {
    StatusBar.setHidden(true);
  }, []);
  const DataImages = [
    require('../assets/images/splash1.png'),
    require('../assets/images/splash2.png'),
    require('../assets/images/splash3.png'),
  ];

  const[sliderScrollIndex,setSliderScrollIndex]=useState(0)
 
  return (
    <View style={styles.mainContainer}>
      <View>
        <ScrollView
          overScrollMode="never"
          pagingEnabled={true}
          contentContainerStyle={styles.mainImagesContainer}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          onScroll={(e)=>{
            setSliderScrollIndex(Math.round(e.nativeEvent.contentOffset.x/wp(100)))
          }}
          >
          {DataImages.map((item, index) => {
            return (
              <Image
                key={index}
                source={item}
                style={
                  index == 0
                    ? styles.image1
                    : index == 2
                    ? styles.image3
                    : styles.image2
                }
              />
            );
          })}
        </ScrollView>
      </View>
      <View style={styles.lineContainer}>
        {
          new Array(3).fill(0).map((item,index)=>(<View 
            key={index}
            style={sliderScrollIndex === index ? styles.higlighttext :styles.unhiglighttext}/>
))}
        
      
      </View>
      <View style={styles.bottomcontainer}>
        <Text style={styles.txt1btmcontainer}>
          Matching Sellers & {'\n'}Buyers
        </Text>
        <Text style={styles.txt2btmcontainer}>
          Schedule your match in just a few clicks
        </Text>
        <CustomButton title={'Get Started'} style={{marginTop: wp(15)}} onPress={()=>navigation.navigate('login')} />
        <View style={styles.bottomTextContainer}>
          <Text style={styles.bottomText}>If you have an account, </Text>
          <Pressable 
        
          > 
            <Text
              style={[{textDecorationLine: 'underline'}, styles.bottomText]}>
              Sign in
            </Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

export default Splash;

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: color.white,
    flex: 1,
  },
  mainImagesContainer: {
    flexDirection: 'row',
  },
  mainImagesContainerstyle: {},
  image1: {
    height: wp(120),
    width: wp(100),
    borderBottomLeftRadius: wp(30),
  },
  image2: {
    height: wp(120),
    width: wp(100),
  },
  image3: {
    height: wp(120),
    width: wp(100),
    borderBottomRightRadius: wp(30),
  },

  lineContainer: {
    flexDirection: 'row',
    marginTop: wp(5),
    width: wp(40),
    justifyContent: 'space-evenly',
    alignSelf: 'center',
  },

  higlighttext: {
    backgroundColor: color.selectedLine,
    height: wp(2),
    width: wp(10),
    borderRadius: wp(1),
  },
  unhiglighttext: {
    backgroundColor: color.unSelectline,
    height: wp(2),
    width: wp(10),
    borderRadius: wp(1),
  },
  bottomcontainer: {
    marginTop: wp(5),
    padding: wp(8),
  },
  txt1btmcontainer: {
    fontFamily: FontFamiy.samsungSansBold,
    color: color.black,
    fontSize: FontSize.xxxl,
  },
  txt2btmcontainer: {
    fontFamily: FontFamiy.gilroyRegular,
    color: color.grey,
    fontSize: FontSize.m,
    paddingTop: wp(3),
  },
  bottomTextContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 12,
  },
  bottomText: {
    fontFamily: FontFamiy.gilroyMedium,
    color: color.black,
    fontSize: FontSize.m,
  },
});
