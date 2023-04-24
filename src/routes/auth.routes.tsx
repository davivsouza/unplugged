import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from "@react-navigation/native-stack";
import { Welcome } from "@screens/Welcome";
import { SignIn } from "@screens/SignIn";
import { AppIntroSlider } from "@screens/AppIntroSlider";
import { Questionnaire } from "@screens/Questionnaire";
import { SignUp } from "@screens/SignUp";
import { Dashboard } from "@screens/Dashboard";

type AuthRoutes = {
  welcome: undefined;
  signIn: undefined;
  signUp: undefined;
  introSlider: undefined
  questionnaire: undefined;
  dashboard: undefined;
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
      <Screen name="signIn" component={SignIn} />
      <Screen name="signUp" component={SignUp} />
      <Screen name="introSlider" component={AppIntroSlider} />
      <Screen name="questionnaire" component={Questionnaire} />
      <Screen name="dashboard" component={Dashboard} />
    </Navigator>
  );
}
