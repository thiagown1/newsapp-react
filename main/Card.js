import React from 'react';
import { CardBackground, RoundView } from './components';

import {
    View,
    Text,
    Image
} from 'react-native';

const style = {
    dateStyle: {
        flex: 1,
        alignSelf: "flex-end",
        marginRight: 8,
        marginTop: 4
    },

    titleStyle: {
        flex: 2,
        marginLeft: 8,
        marginRight: 8
    }
}



const Card = (model) => {
    console.log(model)
    console.log("oioioio")
    return (
        <View style={{alignItems: "center", flex: 1, height: 400}}>
            <CardBackground>
                <RoundView>
                    <Image style={{flex: 6}}
                    source={{uri: model.imageURL }}/>
                    <Text style= {style.dateStyle}> { model.date } </Text>
                    <Text style= {style.titleStyle} numberOfLines={5}> { model.description } </Text>
                </RoundView>
              </CardBackground>
        </View>
    );
}

export default Card;