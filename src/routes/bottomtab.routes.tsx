import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import {MaterialCommunityIcons} from '@expo/vector-icons'
import Home  from '../screens/main-screen/Home'
import SkillScreen  from '../screens/skill/SkillScreen'

const {Navigator, Screen} = createBottomTabNavigator()

export function StackRoutes(){
    return(
        <Navigator
        screenOptions={{
            headerTitleAlign: 'center',
            tabBarLabelStyle: {
                fontSize: 12,
                fontWeight: 'bold'
            },
            tabBarStyle:{
                height: 60
            }
        }}>
            <Screen
                name='Perfil'
                component={Home}
                options={{tabBarIcon:({color, size})=>(
                    <MaterialCommunityIcons
                        name='account'
                        color={color}
                        size={size}
                    />
                   
                )}
            }
                
            />

            <Screen
                name='Habilidades'
                component={SkillScreen}
                options={{tabBarIcon:({color, size})=> (
                    <MaterialCommunityIcons
                        name='certificate'
                        color={color}
                        size={size}
                    />
                )}}
            />
        </Navigator>
    )
}