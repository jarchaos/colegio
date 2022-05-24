import React from 'react'
import { View, Text, Touchable, TouchableOpacity } from 'react-native'

const Button = ({disabled, onPress, text}) => {
    return (
        <TouchableOpacity disabled={disabled} onPress={onPress} style={{padding:15,backgroundColor:"red"}}>
            <Text>{text}</Text>
        </TouchableOpacity>
    )
}

export default Button
