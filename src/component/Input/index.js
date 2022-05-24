import React from 'react'
import { View, Text, TextInput } from 'react-native'

const Input = ({tittle,placeHolder,placeholderTextColor,data,setData,secureTextEntry}) => {
    return (
        <View>
            <Text>{tittle}</Text>
            <TextInput value={data} onChangeText={setData} placeholder={placeHolder} placeholderTextColor={placeholderTextColor} secureTextEntry={secureTextEntry}/>            

        </View>

    )
}

export default Input
