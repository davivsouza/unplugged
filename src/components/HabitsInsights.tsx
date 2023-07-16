import { Box, FlatList, HStack, ScrollView, Text, VStack, useTheme } from "native-base";
import { InsightsCard } from "./InsightsCard";
import { VictoryPie } from 'victory-native'
import { HabitsChart } from "./HabitsChart";


export function HabitsInsights() {
  const { colors } = useTheme()
  const DATA = [
    {
      x: 'Youtube',
      y: 120,
      color: colors.red[300]
    },
    {
      x: 'Tiktok',
      y: 480,
      color: colors.purple[500]
    },
    {
      x: 'Outros',
      y: 35,
      color: colors.yellow[300]
    },
    {
      x: 'Spotify',
      y: 110,
      color: colors.green[300]
    },
  ]

  return (
    <ScrollView height="70%" contentContainerStyle={{
      paddingBottom: 100,
    }} showsVerticalScrollIndicator={false}>

      <InsightsCard>
        <VictoryPie
          data={DATA}
          colorScale={DATA.map(player => player.color)}
          innerRadius={90}
          style={{ labels: { fill: "white", fontSize: 20 } }}
          startAngle={-60}
          endAngle={360}
          width={400}
          height={300}
        />

      </InsightsCard>
     <InsightsCard >
      <HStack space={4} position="absolute" top={8} right={8}>
        <HStack alignItems='center' space={1}>
          <Box w={2} h={2} rounded="full" bg="gray.200"/>
          <Text color="gray.200" fontSize="md">Planejados</Text>
        </HStack>
        <HStack alignItems='center' space={1}>
        <Box w={2} h={2} rounded="full" bg="purple.500"/>
          <Text color="gray.200" fontSize="md">Conclúidos</Text>
        </HStack>
      </HStack>
      <HabitsChart/>
       
     </InsightsCard>

    </ScrollView >

  )
}