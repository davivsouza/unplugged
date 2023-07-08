import { ScrollView, useTheme } from "native-base";
import { InsightsCard } from "./InsightsCard";
import { VictoryPie } from 'victory-native'


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
      
    </ScrollView >

  )
}