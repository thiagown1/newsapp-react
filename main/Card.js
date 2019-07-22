import React from 'react';
import { CardBackground, RoundView } from './components';

import {
    View,
    Text,
    Image,
    NativeModules,
    TouchableWithoutFeedback,
    Alert
} from 'react-native';

const style = {
    dateStyle: {
        flex: 1,
        alignSelf: "flex-end",
        marginRight: 8,
        marginTop: 4
    },

    descriptionStyle: {
        flex: 2,
        marginLeft: 8,
        marginRight: 8,
        marginBottom: 8
    }
}



const Card = (item) => {
    const model = item.model
    const locale = NativeModules.SettingsManager.settings.AppleLocale
    let date = new Date(model.publishedAt).toLocaleDateString(locale.replace('_', '-'))

    return (
        <View style={{alignItems: "center", flex: 1, height: 400}}>
            <TouchableWithoutFeedback onPress={() => {Alert.alert('You tapped the button!')}}>
                <CardBackground>
                    <RoundView>
                        <Image style={{flex: 6}}
                        source={{uri: model.urlToImage }}/>
                        <Text style= {style.dateStyle}> { date } </Text>
                        <Text style= {style.descriptionStyle} numberOfLines={5}> { model.description } </Text>
                    </RoundView>
                </CardBackground>
            </TouchableWithoutFeedback>
        </View>
    );
}

export default Card;