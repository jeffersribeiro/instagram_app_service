import React, {Component} from 'react';
import styles from './styles'
import {
  View,
  Text,
} from 'react-native';

const Button = () => {
    return(
        <View>
            <Text style={styles.button}>
                Press me!!
            </Text>
        </View>
    )
}

export default Button