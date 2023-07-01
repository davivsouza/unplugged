import {
  HStack,
  Pressable,
  Text,
  VStack,
  Box,
  Image,
  useTheme,
  ScrollView,
} from "native-base";
import { View } from "react-native";

import BeatsBgTemplate from "@assets/binauralsounds/beat-bg-template.png";
import BtnPlay from "@assets/binauralsounds/btnPlay.svg";
import { PlaylistCard } from "@components/PlaylistCard";


export function BinauralContent() {
  const { colors } = useTheme();

  return (
    <VStack>
      <HStack justifyContent="space-between" alignItems="center">
        <Pressable>
          <Box width={8} height={1} bg="white" mb={2} rounded="md" />
          <Box width={8} height={1} bg="white" rounded="md" />
        </Pressable>
        <Text color="white" fontFamily="semiBold" fontSize="3xl">
          Binaural Beats
        </Text>
        <Image
          w={10}
          h={10}
          rounded="full"
          source={{
            uri: "https://e0.pxfuel.com/wallpapers/675/779/desktop-wallpaper-funny-monkeys-pistols-necktie-suit-thumbnail.jpg",
          }}
          alt="Foto de perfil do usuário"
        />
      </HStack>
      <Text color="white" fontFamily="semiBold" fontSize="xl" mt={8} mb={4}>
        Seus beats favoritos
      </Text>
      <Box position="relative" h={250}>
        <VStack alignItems="center">
          <Image
            w="full"
            h={250}
            rounded="3xl"
            source={BeatsBgTemplate}
            alt="Foto de perfil do usuário"
            position="absolute"
          />
          <View
            style={{
              width: "94%",
              height: 250,
              borderRadius: 20,
              backgroundColor: colors.gray[400],
              elevation: -1,
              position: "absolute",
              top: 12,
            }}
          />
          <View
            style={{
              width: "89%",
              height: 250,
              borderRadius: 20,
              backgroundColor: colors.gray[600],
              elevation: -2,
              position: "absolute",
              top: 22,
            }}
          />
        </VStack>
        <HStack
          justifyContent="space-between"
          alignItems="center"
          bottom={-0.5}
          height={75}
          width="full"
          borderBottomLeftRadius="3xl"
          borderBottomRightRadius="3xl"
          position="absolute"
          bg="rgba(0, 0, 0, 0.6)"
          py={1}
          px={5}
        >
          <VStack flex={1}>
            <Text color="white" fontFamily="semiBold" fontSize="2xl">
              Leitura Imersiva
            </Text>
            <Text color="white" fontFamily="body" fontSize="sm">
              Jorge Martin
            </Text>
          </VStack>
          <Pressable>
            <BtnPlay width={45} height={45} />
          </Pressable>
        </HStack>
      </Box>

      <Text color="white" fontFamily="semiBold" fontSize="lg" mt={12}>Lançamentos</Text>
      <ScrollView h={210} showsVerticalScrollIndicator={false}>
        <PlaylistCard title="Relaxamento" beatsQuantity={10}/>
        <PlaylistCard title="Foco" beatsQuantity={7}/>
        <PlaylistCard title="Criatividade" beatsQuantity={3}/>
        
      </ScrollView>
    </VStack>
  )
}