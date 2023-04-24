import {Input as NativeBaseInput, IInputProps} from 'native-base'
export function Input({...rest}: IInputProps){
  return (
    <NativeBaseInput
      mb={4}
      h={12}
      borderWidth={3}
      rounded="lg"
      fontSize="md"
      fontFamily="body"
      placeholderTextColor='gray.400'  
      _focus={{
        bg:"transparent",
        borderWidth: 3,
        borderColor: "purple.400",
      }}    
      {...rest}
    />
  )
}