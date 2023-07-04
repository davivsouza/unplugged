import { Box, HStack, Text, VStack, ScrollView, useTheme } from "native-base";
import { InsightsCard } from "./InsightsCard";
import { VictoryPie, VictoryBar, VictoryChart, VictoryTheme } from 'victory-native'


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
  const dataBars = [
    { year: '2011', earnings: 13000 },
    { year: '2012', earnings: 16500 },
    { year: '2013', earnings: 14250 },
    { year: '2014', earnings: 19000 }
  ];
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
      <InsightsCard>
        <VictoryChart width={350} theme={VictoryTheme.material}>
          <VictoryBar data={dataBars} x="quarter" y="earnings" colorScale={[colors.purple[500]]}/>
        </VictoryChart>

      </InsightsCard>
    </ScrollView>

  )
}