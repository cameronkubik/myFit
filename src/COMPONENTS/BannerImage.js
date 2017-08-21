// Import libraries for making a component
import React from 'react';
import { View, Image } from 'react-native';

const banner = require('../IMAGES/successTrains.jpg');

// Make a component
const BannerImage = () => {
    const { bannerStyle, imageStyle } = styles;

    return (
        <View style={bannerStyle}>
            <Image
                source={banner}
                style={imageStyle}
                resizeMode={'contain'}
            />
        </View>
    );
};

const styles = {
    bannerStyle: {
        height: 150,
        alignSelf: 'center',
        marginBottom: 10,
        marginTop: 64,
    },
    imageStyle: {
        height: 150,
    },
};
// Make the component available to other parts of the App
export { BannerImage };
