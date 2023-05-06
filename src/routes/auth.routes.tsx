import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from "@react-navigation/native-stack";
import { Welcome } from "@screens/Welcome";
import { SignIn } from "@screens/SignIn";
import { AppIntroSlider } from "@screens/AppIntroSlider";
import { SignUp } from "@screens/SignUp";
import { Dashboard } from "@screens/Dashboard";

type AuthRoutes = {
  welcome: undefined;
  signIn: undefined;
  signUp: undefined;
  introSlider: undefined
  appHome: undefined
};

export type AuthNavigatorRouteProps = NativeStackNavigationProp<AuthRoutes>;

const { Navigator, Screen } = createNativeStackNavigator<AuthRoutes>();

export function AuthRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false, contentStyle: {
      paddingVertical: 90,
      paddingHorizontal: 32,
    }}}>
      <Screen name="appHome" component={Dashboard}/>
      <Screen name="signUp" component={SignUp}/>
      <Screen name="welcome" component={Welcome}/>
      <Screen name="signIn" component={SignIn} />
      <Screen name="introSlider" component={AppIntroSlider} />
    </Navigator>
  );
}
