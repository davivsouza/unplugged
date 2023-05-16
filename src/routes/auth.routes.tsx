import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from "@react-navigation/native-stack";
import { Welcome } from "@screens/Welcome";
import { SignIn } from "@screens/SignIn";
import { AuthIntroSlider } from "@screens/AuthIntroSlider";
import { SignUp } from "@screens/SignUp";

type AuthRoutes = {
  welcome: undefined;
  signIn: undefined;
  signUp: undefined;
  introSlider: undefined
};

export type AuthNavigatorRouteProps = NativeStackNavigationProp<AuthRoutes>;

const { Navigator, Screen } = createNativeStackNavigator<AuthRoutes>();

export function AuthRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false, contentStyle: {
      paddingVertical: 90,
      paddingHorizontal: 32,
    }}}>
      <Screen name="welcome" component={Welcome}/>
      <Screen name="signUp" component={SignUp}/>
      <Screen name="signIn" component={SignIn} />
      <Screen name="introSlider" component={AuthIntroSlider} />
    </Navigator>
  );
}
