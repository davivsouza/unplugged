import {Center, Spinner} from 'native-base'


export function Loading(){
    return (
        <Center flex={1} bg="black">
            <Spinner size="lg" color="purple.500"/>
        </Center>
    )
}