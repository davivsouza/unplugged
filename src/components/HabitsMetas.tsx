import { Text, VStack } from "native-base";
import { HabitsFloatButton } from "./HabitsFloatButton";

export function HabitsMetas(){
  return (
    <VStack position="relative">
    <Text color="white" fontFamily="body" fontSize="xl">
      Metas
    </Text>
      <HabitsFloatButton/>
    </VStack>
  )
}