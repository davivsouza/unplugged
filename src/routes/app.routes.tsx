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
import { Box, useTheme, VStack } from "native-base";
import { Playlist } from "@screens/AppScreens/BinauralSounds/Playlist";
import { Meditations } from "@screens/AppScreens/Meditations";
import { MeditationPlayer } from "@screens/AppScreens/Meditations/MeditationPlayer";
import { Habits } from "@screens/AppScreens/Habits";
import { Shop } from "@screens/AppScreens/Shop";
import { BinauralSound } from "@screens/AppScreens/BinauralSounds/BinauralSound";
import { Cart } from "@screens/AppScreens/Shop/Cart";

type AppRoutes = {
  journey: undefined;
  meditations: undefined;
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
  playlist: undefined
  meditationPlayer: {
    title: string
    artist: string
  }
  binauralSound: {
    title: string
    artist: string
  }
  cart: undefined
};

export type AppNavigatorRoutesProps = BottomTabNavigationProp<AppRoutes>;

const { Navigator, Screen } = createBottomTabNavigator<AppRoutes>();
export function AppRoutes() {

  return (
    <Navigator
      // tabBar={(props) => <MyTabBar {...props} />}
      initialRouteName="shop"
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
      <Screen name="habits" component={Habits} options={{
        tabBarIcon: ({ focused }) => (
          <VStack position="relative">

            <HabitsSvg
              stroke="#fff"
              strokeWidth={3}
              width={30}
              height={30}
            />
            {focused && (
              <Box position="absolute" top={"170%"} w={8} h={4} bg="purple.500" borderTopLeftRadius="full" borderTopRightRadius="full" />
            )}
          </VStack>
        ),
      }} />
      <Screen name="binaural" component={BinauralSounds} options={{
        tabBarIcon: ({ focused }) => (
          <VStack position="relative">

            <BinauralSvg
              fill="#fff"
              width={40}
              height={40}
            />
            {focused && (
              <Box position="absolute" left={1} top={"140%"} w={8} h={4} bg="purple.500" borderTopLeftRadius="full" borderTopRightRadius="full" />
            )}
          </VStack>
        )
      }} />

      <Screen name="journey" component={Journey} options={{
        tabBarIcon: () => (
          <Box
            width={16}
            height={16}
            bg="purple.500"
            rounded="full"
            alignItems="center"
            justifyContent="center"

          >
            <JourneySvg fill="#fff" width={28} height={28} />
          </Box>
        )

      }} />
      <Screen name="meditations" component={Meditations} options={{
        tabBarIcon: ({ focused }) => (
          <VStack position="relative">

            <MeditationSvg
              fill="#fff"
              width={40}
              height={40}
            />
            {focused && (
              <Box position="absolute" left={1} top={"140%"} w={8} h={4} bg="purple.500" borderTopLeftRadius="full" borderTopRightRadius="full" />
            )}
          </VStack>
        )
      }} />
      <Screen name="shop" component={Shop} options={{
        tabBarIcon: ({ focused }) => (
          <VStack>

            <ShopSvg
              fill="#fff"
              width={30}
              height={30}
            />
            {focused && (
              <Box position="absolute" top={"170%"} w={8} h={4} bg="purple.500" borderTopLeftRadius="full" borderTopRightRadius="full" />
            )}
          </VStack>
        )
      }} />
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
      <Screen
        name="playlist"
        component={Playlist}
        options={{
          tabBarButton: () => null,
        }}
      />
      <Screen
        name="meditationPlayer"
        component={MeditationPlayer}
        options={{
          tabBarStyle: {
            display: "none",
          },
          tabBarButton: () => null,

        }}
      />
      <Screen
        name="binauralSound"
        component={BinauralSound}
        options={{
          tabBarStyle: {
            display: "none",
          },
          tabBarButton: () => null,

        }}
      />
      <Screen
        name="cart"
        component={Cart}

        options={{
          tabBarStyle: {
            display: "none",
          },
          tabBarButton: () => null,
        }}
      />
    </Navigator>
  );
}
