import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from "@react-navigation/native-stack";
import { HasAccount } from "@screens/HasAccount";
import { Home } from "@screens/Home";

type AuthRoutes = {
  hasAccount: undefined;
  signIn: undefined;
  signUp: undefined;
};

export type AuthNavigatorRouteProps = NativeStackNavigationProp<AuthRoutes>;

const { Navigator, Screen } = createNativeStackNavigator<AuthRoutes>();


const config = {
    animation: 'spring',
    config: {
      stiffness: 1000,
      damping: 500,
      mass: 3,
      overshootClamping: true,
      restDisplacementThreshold: 0.01,
      restSpeedThreshold: 0.01,
    },
  };

export function AuthRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false}}>
      <Screen name="hasAccount" component={HasAccount}/>
      <Screen name="signIn" component={Home} />
    </Navigator>
  );
}
