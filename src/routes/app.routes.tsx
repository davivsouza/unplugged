import {createBottomTabNavigator, BottomTabNavigationProp} from '@react-navigation/bottom-tabs'

import {Dashboard} from '@screens/Dashboard'

type AppRoutes = {
    dashboard: undefined
}

export type AppNavigatorRoutesProps = BottomTabNavigationProp<AppRoutes>

const {Navigator,Screen} = createBottomTabNavigator<AppRoutes>()


export function AppRoutes(){
    return (
        <Navigator>
            <Screen name="dashboard" component={Dashboard}/>
        </Navigator>
    )
}