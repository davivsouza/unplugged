import { HabitsControlTimerAppBox } from "./HabitsControlTimerAppBox";
import { HStack, Modal, Pressable, Text, VStack } from "native-base";
import { useGoals } from "@hooks/useGoals";
import GoBackSvg from "@assets/goback.svg";
import TikTokIcon from '@assets/habits/tiktok-icon.svg'
import SpotifyIcon from '@assets/habits/spotify-icon.svg'
import YoutubeIcon from '@assets/habits/youtube-icon.svg'
import GoogleIcon from '@assets/habits/google-icon.svg'
import TwitterIcon from '@assets/habits/twitter-icon.svg'
import { useState } from "react";
import { HabitsTimerInputModal } from "./HabitsTimerInputModal";

type Props = {
  isModalOpen: boolean
  onOpenModal: (status: boolean) => void
}

export function HabitsControlSetTimerModal({ isModalOpen, onOpenModal }: Props) {
  const [selectedApp, setSelectedApp] = useState('')
  const [isTimerInputModalOpen, setIsTimerInputModalOpen] = useState(false)
  const { createGoal } = useGoals()

  function handleSelectedApp(app: string) {
    setSelectedApp(app)
    setIsTimerInputModalOpen(true)
  }


  return (
    <Modal
      isOpen={isModalOpen}
      justifyContent="center"
      alignItems="center"
      _backdrop={{
        bg: "black"
      }}
      onClose={() => onOpenModal(false)}
    >
      <VStack
        borderTopRadius="3xl"
        bg={{
          linearGradient: {
            colors: ["gray.800", "purple.800"],
            start: [0, 1],
            end: [0, 0],
          },
        }}
        py={20}
        px={6}
        width="full"
        height="100%"
        position="absolute"
        bottom={0}
        justifyContent="flex-start"

      >

        <HStack w="full" alignItems="center" justifyContent="center" mb={3} >
          <Pressable
            py={3}
            pr={8}
            onPress={() => onOpenModal(false)}
            position='absolute'
            alignItems="center"
            justifyContent="center"
            left={0}>
            <GoBackSvg fill="#fff" />
          </Pressable>
          <Text color="white" fontSize="2xl" fontFamily="heading">Novo Timer</Text>
        </HStack>
        <Text color="white" fontSize="2xl" fontFamily="semiBold" mt={12}>Apps mais usados</Text>
        <Text color="gray.200" fontSize="sm" fontFamily="body">
          Selecione um app e limite o tempo de uso dele.
        </Text>

        <VStack w="full" space={4} mt={3}>

          <HabitsControlTimerAppBox
            appName="TikTok"
            svgIcon={TikTokIcon}
            seconds={1800}
            selectedApp={selectedApp}
            onPress={() => handleSelectedApp('TikTok')}
          />
          <HabitsControlTimerAppBox
            appName="Spotify"
            svgIcon={SpotifyIcon}
            seconds={1200}
            selectedApp={selectedApp}
            onPress={() => handleSelectedApp('Spotify')}
          />

        </VStack>

        <HabitsTimerInputModal isModalOpen={isTimerInputModalOpen} onOpenModal={setIsTimerInputModalOpen} />
      </VStack>
    </Modal>
  )
}