import { BottomTabBarProps } from "@react-navigation/bottom-tabs";
import { Box, HStack, Pressable, useTheme } from "native-base";
import { useState } from "react";
import JourneySvg from "@assets/Journey-icon.svg";
import MeditationSvg from "@assets/Meditation-icon.svg";
import ShopSvg from "@assets/shop-icon.svg";
import BinauralSvg from "@assets/Binaural-icon.svg";
import HabitsSvg from "@assets/Habits-icon.svg";

type Props = BottomTabBarProps;
export function MyTabBar({ state, navigation }: Props) {
  const [selectedTab, setSelectedTab] = useState("journey");
  const { colors } = useTheme();
  function handleSelectedTab(route: string) {
    setSelectedTab(route);
    navigation.navigate(route);
  }
  return (
    <HStack position="absolute" bottom={3} zIndex={1}>
      {state.routeNames.slice(0, 5).map((route, idx) => (
        <Box flex={1} key={idx}>
          {route === "journey" ? (
            <Pressable
              width={16}
              height={16}
              ml={2}
              key={route}
              bg="purple.500"
              rounded="full"
              alignItems="center"
              justifyContent="center"
              onPress={() => {
                handleSelectedTab(route);
              }}
            >
              <JourneySvg fill="#fff" width={28} height={28} />
            </Pressable>
          ) : (
            <Pressable
              flex={1}
              height={16}
              bg="transparent"
              alignItems="center"
              justifyContent="center"
              onPress={() => {
                handleSelectedTab(route);
              }}
            >
              {route === "habits" && (
                <HabitsSvg
                  fill={selectedTab === "habits" ? colors.purple[500] : "#fff"}
                  width={30}
                  height={30}
                />
              )}
              {route === "binaural" && (
                <BinauralSvg
                  fill={
                    selectedTab === "binaural" ? colors.purple[500] : "#fff"
                  }
                  width={40}
                  height={40}
                  onPress={() => {
                    handleSelectedTab(route);
                  }}
                />
              )}
              {route === "meditation" && (
                <MeditationSvg
                  fill={
                    selectedTab === "meditation" ? colors.purple[500] : "#fff"
                  }
                  width={40}
                  height={40}
                />
              )}
              {route === "shop" && (
                <ShopSvg
                  fill={selectedTab === "shop" ? colors.purple[500] : "#fff"}
                  width={30}
                  height={30}
                />
              )}
            </Pressable>
          )}
        </Box>
      ))}
    </HStack>
  );
}
