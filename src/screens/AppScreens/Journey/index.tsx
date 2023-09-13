import { useEffect, useState } from "react";
import { Divider, FlatList, Heading, Text, VStack, Pressable } from "native-base";
import { Modules } from "@components/Modules";
import { Module } from "../../../@types/module";
import { ScreenContainer } from "@components/ScreenContainer";
import { useAuth } from "@hooks/useAuth";
import { api } from "../../../services/api";
import { ModuleDTO } from "../../../dtos/ModuleDTO";



export function Journey() {
  const [modulesData, setModulesData] = useState<ModuleDTO[]>([]);

  const { user, signOut } = useAuth();


  async function signOutAccount() {
    await signOut();
  }

  async function fetchModules() {
    const { data } = await api.get('modules/');
    setModulesData(data.modules)


  }
  useEffect(() => {
    fetchModules()
  }, [])

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
      <Pressable bg="purple.500" w={20} p={4} onPress={signOutAccount}>
        <Text color="white" >
          Sair da conta teste
        </Text>
      </Pressable>
      <Divider my={7} />
      <FlatList
        flex={1}
        data={modulesData}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item: module }) => <Modules module={module} />}
      />
    </ScreenContainer>
  );
}
