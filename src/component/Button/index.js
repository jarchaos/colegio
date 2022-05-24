import React from 'react'
import { View, Text, Touchable, TouchableOpacity } from 'react-native'
import styles from './styles'

const Button = ({disabled, onPress, text}) => {
    return (
        <TouchableOpacity disabled={disabled} onPress={onPress} style={styles.button}>
            <Text>{text}</Text>
        </TouchableOpacity>
    )
}

export default Button
