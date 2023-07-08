import { ScreenContainer } from "@components/ScreenContainer";
import { Text, ScrollView, useTheme, HStack, Pressable } from "native-base";
import { VictoryBar, VictoryChart, VictoryAxis, VictoryLabel } from 'victory-native'
import { useNavigation } from "@react-navigation/native";
import { AppNavigatorRoutesProps } from "@routes/app.routes";
import GoBackSvg from "@assets/goback.svg";

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
  const { navigate } = useNavigation<AppNavigatorRoutesProps>()

  function handleNavigate() {
    navigate('habits')
  }

  return (
    <ScreenContainer>
       <HStack alignItems="center" justifyContent="space-between" >
        <Pressable onPress={handleNavigate}>
          <GoBackSvg fill="#fff" />
        </Pressable>
        <Text color="white" fontSize="2xl" fontFamily="heading" style={{
          elevation: 10
        }}>Painel</Text>
      </HStack>

      <ScrollView width="100%" horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{
        alignItems: 'center',
        paddingBottom: 40,
        paddingTop: 30,
      }}>

        <VictoryChart
          width={450}
          domainPadding={{ x: 30, y: 40 }}
        >
          <VictoryLabel
            text={`26 hr 47 min`}
            x={225}
            y={30}
            textAnchor="middle"
            style={{ fill: "#fff", fontSize: 20 }}
          />

          <VictoryAxis
            style={{
              ...sharedAxisStyle,
            }}
          />
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
            cornerRadius={6}
            barWidth={30}
            data={[
              { day: "Dom", hours: 9 },
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
                fill: colors.purple[500]
              }
            }}

          />
        </VictoryChart>
      </ScrollView>
    </ScreenContainer>
  )
}