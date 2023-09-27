import { ScreenContainer } from "@components/ScreenContainer";
import { Text, ScrollView, useTheme, HStack, Pressable, Box, VStack } from "native-base";
import { VictoryBar, VictoryChart, VictoryAxis, } from 'victory-native'
import { useNavigation } from "@react-navigation/native";
import { AppNavigatorRoutesProps } from "@routes/app.routes";
import { WellbeingApp } from "@components/WellbeingApp";
import { AntDesign } from '@expo/vector-icons'

import GoBackSvg from "@assets/goback.svg";
import TikTokIcon from '@assets/habits/tiktok-icon.svg'
import SpotifyIcon from '@assets/habits/spotify-icon.svg'
import YoutubeIcon from '@assets/habits/youtube-icon.svg'
import GoogleIcon from '@assets/habits/google-icon.svg'
import TwitterIcon from '@assets/habits/twitter-icon.svg'


const sharedAxisStyle = {
  axis: {
    stroke: '#fff'
  },
  axisLabel: {
    padding: 30,
    fill: '#fff',
  },
  tickLabels: {
    fill: "#fff",
    fontSize: 12,
  }
}
export function Painel() {
  const { colors } = useTheme()
  const { navigate, goBack } = useNavigation<AppNavigatorRoutesProps>()

  function handleNavigate() {
    goBack()
  }

  return (
    <ScreenContainer py={0} pt={10}>
      <HStack alignItems="center" justifyContent="space-between"   >
        <Pressable
          py={3}
          pr={8}
          onPress={handleNavigate}
          alignItems="center"
          justifyContent="center"
        >
          <GoBackSvg fill="#fff" />
        </Pressable>
        <Text color="white" fontSize="2xl" fontFamily="heading">
          Painel
        </Text>
        <Pressable p={2} rounded='full' bg="gray.400" my={8} onPress={() => navigate('profile')}>
          <AntDesign name="user" size={35} color="white" />
        </Pressable>
      </HStack>
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{
        paddingBottom: 30
      }}>
        <Text color="white" fontSize="3xl" fontFamily="body" textAlign="center" mt={12}>29h 47min</Text>
        <Text color="gray.200" fontSize="md" fontFamily="body" textAlign="center" >seg, 17 de Jul</Text>
        <Box alignItems="center" justifyContent="center">
          <VictoryChart
            animate={{ duration: 700, easing: "bounce" }}
            width={430}
            domainPadding={{ x: 30, y: 30 }}
          >


            <VictoryAxis dependentAxis
              style={{
                ...sharedAxisStyle,
                grid: {
                  fill: "#fff",
                  stroke: "#fff",
                  pointerEvents: "painted",
                  strokeWidth: 0.5
                }
              }}
            />
            <VictoryBar
              events={[
                {
                  target: 'data',
                  eventHandlers: {
                    onPress: (data) => {
                      console.log('s');
                      return [{
                        target: "data",
                        mutation: (props) => {
                          const fill = props.style.fill;
                          return fill === colors.purple[500] ? null : { style: { fill: colors.purple[500] } }

                        }
                      }];

                    }
                  }
                }
              ]}
              cornerRadius={6}
              barWidth={30}
              data={[
                { day: "Dom", hours: 3 },
                { day: "Seg", hours: 8 },
                { day: "Ter", hours: 2 },
                { day: "Qua", hours: 6 },
                { day: "Qui", hours: 4 },
                { day: "Sex", hours: 2 },
                { day: "Sáb", hours: 10 },
              ]}
              x="day"
              y="hours"
              style={{
                data: {
                  fill: colors.purple[200]
                }
              }}

            />
            <VictoryAxis
              style={{
                ...sharedAxisStyle,
              }}
            />
          </VictoryChart>
        </Box>
        <Text color="white" fontSize="2xl" fontFamily="semiBold" mt={12}>8h 47min</Text>
        <Text color="gray.200" fontSize="sm" fontFamily="body" >6 horas a mais que ontem</Text>

        <VStack space={4} mt={6}>
          <WellbeingApp appName="TikTok" SvgIcon={TikTokIcon} seconds={16200} />
          <WellbeingApp appName="Spotify" SvgIcon={SpotifyIcon} seconds={4860} />
          <WellbeingApp appName="Youtube" SvgIcon={YoutubeIcon} seconds={4572} />
          <WellbeingApp appName="Google" SvgIcon={GoogleIcon} seconds={1800} />
          <WellbeingApp appName="Twitter" SvgIcon={TwitterIcon} seconds={1140} />
        </VStack>
      </ScrollView>

    </ScreenContainer>
  )
}