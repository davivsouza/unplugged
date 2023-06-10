import { MyTabBar } from "@components/MyTabBar";
import {
  createBottomTabNavigator,
  BottomTabNavigationProp,
} from "@react-navigation/bottom-tabs";
import { Journey } from "@screens/AppScreens/Journey";
import { Module } from "@screens/AppScreens/Journey/Module";
import { Module as ModuleDTO } from "../@types/module";
import { ModuleVideo } from "@screens/AppScreens/Journey/ModuleVideo";
import { BinauralSounds } from "@screens/AppScreens/BinauralSounds";

type AppRoutes = {
  journey: undefined;
  meditation: undefined;
  habits: undefined;
  shop: undefined;
  binaural: undefined;
  module: {
    module: ModuleDTO;
  };
  moduleVideo: {
    moduleNumber: number;
    videoNumber: number;
    videoTitle: string;
    duration: number;
    comments?: [
      {
        userId: string;
        comment: string;
        likes: number;
        stars: number;
      }
    ];
  };
  binauralSounds: undefined;
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
          zIndex: 1
        },
      }}
    >
      <Screen name="habits" component={Journey} />
      <Screen name="binaural" component={BinauralSounds}/>

      <Screen name="journey" component={Journey} />
      <Screen name="meditation" component={Journey} />
      <Screen name="shop" component={Journey} />
      <Screen
        name="module"
        component={Module}
        options={{
          tabBarButton: () => null,
        }}
      />
      <Screen
        name="moduleVideo"
        component={ModuleVideo}
        options={{
          tabBarButton: () => null,
        }}
      />
    </Navigator>
  );
}
