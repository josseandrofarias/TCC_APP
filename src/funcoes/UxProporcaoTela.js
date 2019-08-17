import {Dimensions, PixelRatio} from 'react-native';

const Ux = {
    widthPercentageToDP : (widthPercent) => {
        const screenWidth = Dimensions.get('window').width;
        return PixelRatio.roundToNearestPixel(screenWidth * parseFloat(widthPercent) / 100);
    },

    heightPercentageToDP : (heightPercent) => {

        const screenHeight = Dimensions.get('window').height;
        return PixelRatio.roundToNearestPixel(screenHeight * parseFloat(heightPercent) / 100);
    }

};

export default Ux;
