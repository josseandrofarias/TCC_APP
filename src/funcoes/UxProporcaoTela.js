import {Dimensions, PixelRatio} from 'react-native';

const Ux = {
    widthPercentageToDP : (widthPercent) => {
        const screenWidth = Dimensions.get('window').width;
        return PixelRatio.roundToNearestPixel(screenWidth * parseFloat(widthPercent) / 100);
    },


    heightPercentageToDP : (heightPercent) => {
        const screenHeight = Dimensions.get('window').height;
        return PixelRatio.roundToNearestPixel(screenHeight * parseFloat(heightPercent) / 100);
    },

    aspectRatio : () => {
        const {width, height} = Dimensions.get('window');
        return width / height;
    },

    widthDispositivo: () => Dimensions.get('window').width,

    heightDispositivo: () => Dimensions.get('window').height,


};

export default Ux;
