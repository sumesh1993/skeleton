import { Alert } from 'react-native';

export default class AlertBox {


    static show(title, message, callback){


        Alert.alert(
            title,
            message,
            [
                {text: 'Yes', onPress:callback},
                {text: 'No'},
            ]
        );
    }



}
