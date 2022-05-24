import React from 'react'
import { View, Text } from 'react-native'
import Button from '../../component/Button'

const ParentsScreen = ({setIsVerified}) => {
    const handlePress = () =>{
        setIsVerified(null)
      }
    return (
        <View>
            <Text>Pantalla Acudiente</Text>
            <Button onPress={handlePress} text={'Cerrar Sesión'} disabled={false} />
        </View>
    )
}

export default ParentsScreen
