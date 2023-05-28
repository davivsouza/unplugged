import { MyTabBar } from "@components/MyTabBar";
import {
  createBottomTabNavigator,
  BottomTabNavigationProp,
} from "@react-navigation/bottom-tabs";
import { Journey } from "@screens/AppScreens/Journey";
import { Module } from "@screens/AppScreens/Journey/Module";
import { Module as ModuleDTO } from "../@types/module";

type AppRoutes = {
  journey: undefined;
  meditation: undefined;
  habits: undefined;
  shop: undefined;
  binaural: undefined;
  module: {
    module: ModuleDTO
  }
};

export type AppNavigatorRoutesProps = BottomTabNavigationProp<AppRoutes>;

const { Navigator, Screen } = createBottomTabNavigator<AppRoutes>();

export function AppRoutes() {

  return (
    <Navigator
      tabBar={(props) => <MyTabBar {...props} />}
      initialRouteName="journey"
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          position: "absolute",
          backgroundColor: "transparent",
          shadowColor: "transparent",
          borderTopColor: "transparent",
        },
      }}
    >
      <Screen name="habits" component={Journey} />
      <Screen name="binaural" component={Journey} />

      <Screen name="journey" component={Journey} />
      <Screen name="meditation" component={Journey} />
      <Screen name="shop" component={Journey} />
      <Screen
        name="module"
        component={Module}
        options={{
          tabBarButton: () => null
        }}
      />
    </Navigator>
  );
}
