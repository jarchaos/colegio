import React from 'react';
import {View, Text} from 'react-native';
import Button from '../../component/Button'

const ProfessorScreen = ({setIsVerified}) => {
  const handlePress = () =>{
    setIsVerified(null)
  }
  return (
    <View>
      <Text>Pantalla Profesor</Text>
      <Button onPress={handlePress} text={'Cerrar Sesión'} disabled={false} />
    </View>
  );
};

export default ProfessorScreen;
