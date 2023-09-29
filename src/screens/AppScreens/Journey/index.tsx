import { useCallback, useEffect, useState } from "react";
import { Divider, FlatList, Heading, Text, VStack, Pressable, HStack, Box, useToast } from "native-base";
import { Modules } from "@components/Modules";
import { ScreenContainer } from "@components/ScreenContainer";
import { useAuth } from "@hooks/useAuth";
import { api } from "../../../services/api";
import { ModuleDTO } from "../../../dtos/ModuleDTO";
import { JourneyHeader } from "@components/JourneyHeader";
import { useFocusEffect } from "@react-navigation/native";
import { AppError } from "@utils/AppError";
import { Loading } from "@components/Loading";


export function Journey() {
  const [modulesData, setModulesData] = useState<ModuleDTO[]>([]);
  const [isFetching, setIsFetching] = useState(false)
  const { user } = useAuth();
  const toast = useToast()

  async function fetchModules() {
    try {
      setIsFetching(true)
      const { data } = await api.get('modules/');
      setModulesData(data.modules)
    } catch (error) {
      const isAppError = error instanceof AppError;
      const title = isAppError ? error.message : 'Não foi possível carregar os módulos!'

      toast.show({
        title,
        placement: 'top',
        bgColor: 'red.500'
      });
    } finally {
      setIsFetching(false)
    }


  }
  useFocusEffect(useCallback(() => {
    fetchModules()
  }, []))

  return (
    <ScreenContainer>
      <Heading
        fontFamily="body"
        fontWeight="normal"
        color="white"
        lineBreakMode="clip"
      >
        Bem-vindo á
      </Heading>
      <Heading fontWeight="normal" fontFamily="body" color="white">
        Jornada <Text fontWeight="bold">{user.name}</Text>
      </Heading>
      <Divider my={7} />
      {isFetching ? <Loading /> : (
        <FlatList
          flex={1}
          data={modulesData}
          showsVerticalScrollIndicator={false}
          keyExtractor={(item) => String(item.id)}
          renderItem={({ item }) => <Modules module={item} />}
        />
      )}

    </ScreenContainer>
  );
}
