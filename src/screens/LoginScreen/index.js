import React, {useState} from 'react'
import { View, Text } from 'react-native'
import Button from '../../component/Button'
import Input from '../../component/Input'
import ProfessorScreen from '../ProfessorScreen'
import ParentsScreen from '../ParentsScreen'

const LoginScreen = () => {
    const [user, setUser] = useState(null)
    const [password, setPassword] = useState(null)
    const [isVerified, setIsVerified] = useState(null)

    const handlePress =()=>{
        console.log(user)
        console.log(password)

        if(user == 'Profesor01' && password == '12345'){
            setIsVerified(1)
        }else if(user == 'Andres' && password =='67890'){
            setIsVerified(2)
        }else{
            setIsVerified(null)
        }
    }

    return (
        <View>
            {isVerified == 1 &&
             <ProfessorScreen setIsVerified={setIsVerified}/>
            }

            {isVerified == 2 &&
             <ParentsScreen setIsVerified={setIsVerified}/>
            }

            {isVerified == null &&
            <View>
                <Text>COLEGIO APP</Text>
                <Input tittle={"Usuario"} placeHolder={"Digite usuario"} placeholderTextColor={"grey"} data={user} setData={setUser} secureTextEntry={false} />
                <Input tittle={"Contraseña"} placeHolder={"Digite contraseña"} placeholderTextColor={"grey"} data={password} setData={setPassword} secureTextEntry={true} />
                <Button onPress={handlePress} text={'Enviar'} disabled={false} />
            </View>
                
            }


        </View>
    )
}

export default LoginScreen
