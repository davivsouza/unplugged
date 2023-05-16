import { BottomTabBarProps } from '@react-navigation/bottom-tabs'
import { HStack, Pressable, useTheme } from 'native-base'
import { useState } from 'react';
import JourneySvg from "@assets/Journey-icon.svg";
import MeditationSvg from "@assets/Meditation-icon.svg";
import ShopSvg from "@assets/shop-icon.svg";
import BinauralSvg from "@assets/Binaural-icon.svg";
import HabitsSvg from "@assets/Habits-icon.svg";


type Props = BottomTabBarProps
export function MyTabBar({ state, navigation }: Props) {
    const [selectedTab, setSelectedTab] = useState("journey");
    const {colors}= useTheme()
    return (
      <HStack position="absolute" bottom={3}>
        {state.routeNames.map((route,idx) => (
          <>
            {route === "journey" ? (
              <Pressable
                width={16}
                height={16}
                mx={4}
                key={idx}
                bg="purple.500"
                rounded="full" 
                alignItems="center"
                justifyContent="center"
                onPress={() => setSelectedTab(route)}
                
              >
                <JourneySvg fill='#fff' width={28} height={28} />
              </Pressable>
            ) : (
              <Pressable
                flex={1}
                height={16}
                key={idx}
                bg="transparent"
                alignItems="center"
                justifyContent="center"
                onPress={() => setSelectedTab(route)}
              >
                {route === "habits" && (
                  <HabitsSvg fill={selectedTab === 'habits' ? colors.purple[500] : '#fff'} width={37} height={37} />
                )}
                {route === "binaural" && (
                  <BinauralSvg fill={selectedTab === 'binaural' ? colors.purple[500] : '#fff'} width={45} height={45} />
                )}
                {route === "meditation" && (
                  <MeditationSvg fill={selectedTab === 'meditation' ? colors.purple[500] : '#fff'} width={45} height={45} />
                )}
                {route === "shop" && <ShopSvg fill={selectedTab === 'shop' ? colors.purple[500] : '#fff'} width={37} height={37} />}
              </Pressable>
            )}
          </>
        ))}
      </HStack>
    );
  }
  