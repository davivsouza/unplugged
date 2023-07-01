import {
  createBottomTabNavigator,
  BottomTabNavigationProp,
} from "@react-navigation/bottom-tabs";
import { Journey } from "@screens/AppScreens/Journey";
import { Module } from "@screens/AppScreens/Journey/Module";
import { Module as ModuleDTO } from "../@types/module";
import { ModuleVideo } from "@screens/AppScreens/Journey/ModuleVideo";
import { BinauralSounds } from "@screens/AppScreens/BinauralSounds";

import JourneySvg from "@assets/Journey-icon.svg";
import MeditationSvg from "@assets/Meditation-icon.svg";
import ShopSvg from "@assets/shop-icon.svg";
import BinauralSvg from "@assets/Binaural-icon.svg";
import HabitsSvg from "@assets/Habits-icon.svg";
import { Pressable, useTheme } from "native-base";

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

  const { colors } = useTheme()
  return (
    <Navigator
      // tabBar={(props) => <MyTabBar {...props} />}
      initialRouteName="journey"
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {

          position: "absolute",
          backgroundColor: "transparent",
          shadowColor: "transparent",
          borderTopColor: "transparent",
          zIndex: 1,
          elevation: 0,
          bottom: 20,
        },
      }}
    >
      <Screen name="habits" component={Journey} options={{
        tabBarIcon: ({ focused }) => (
          <HabitsSvg
            stroke={focused ? colors.purple[500] : "#fff"}
            strokeWidth={3}
            width={30}
            height={30}
          />
        ),
      }} />
      <Screen name="binaural" component={BinauralSounds} options={{
        tabBarIcon: ({ focused }) => (
          <BinauralSvg
            fill={
             focused ? colors.purple[500] : "#fff"
            }
            width={40}
            height={40}
          />
        )
      }} />

      <Screen name="journey" component={Journey} options={{
        tabBarIcon: ({focused}) => (
          <Pressable
              width={16}
              height={16}
              bg="purple.500"
              rounded="full"
              alignItems="center"
              justifyContent="center"
              
            >
              <JourneySvg fill="#fff" width={28} height={28} />
            </Pressable>
        )

      }}/>
      <Screen name="meditation" component={Journey} options={{
        tabBarIcon: ({ focused }) => (
          <MeditationSvg
            fill={
             focused ? colors.purple[500] : "#fff"
            }
            width={40}
            height={40}
          />
        )
      }}/>
      <Screen name="shop" component={Journey} options={{
        tabBarIcon: ({ focused }) => (
          <ShopSvg
            fill={
             focused ? colors.purple[500] : "#fff"
            }
            width={30}
            height={30}
          />
        )
      }}/>
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
