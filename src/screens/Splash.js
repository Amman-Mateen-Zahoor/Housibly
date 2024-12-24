import { Image, ScrollView, StatusBar, StyleSheet, Text, View } from 'react-native';
import React, { useLayoutEffect } from 'react';
import { color } from '../constants/style';
import { wp } from '../utils/utils';

const Splash = () => {
    useLayoutEffect(() => {
        StatusBar.setHidden(true);
    }, []);

    const splashImagesData = [
        require('../assets/images/splash1.png'),
        require('../assets/images/splash2.png'),
        require('../assets/images/splash3.png'),
    ];

    return (
        <View style={styles.mainContainer}>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} contentContainerStyle={styles.imageContainer}>
                
           {splashImagesData.map((item,index)=>{
            let imageStyle= styles.image
            if (index==0){
                imageStyle = styles.image1
            }
            else if(index==2){
                imageStyle=styles.image3
            }
           
            return(
                <Image
                            key={index} // Provide a unique key for each child
                            source={item}
                            style={imageStyle}
                        />
            )

           })}
               
            </ScrollView>
        </View>
    );
};

export default Splash;

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: color.white,
    },
    imageContainer: {
        flexDirection: 'row',
        backgroundColor: 'green',
    },
  image:{
    height:wp(110),
    width:wp(100),
    borderWidth:0.2
},
image1:{
    height:wp(110),
    width:wp(100),
    borderWidth:0.2,
    borderBottomLeftRadius:wp(30)
},
image3:{
    height:wp(110),
    width:wp(100),
    borderWidth:0.2,
    borderBottomRightRadius:wp(30)
}
});
