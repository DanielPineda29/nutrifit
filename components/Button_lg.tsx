import { Center, Button, ButtonText, ButtonIcon, ButtonGroup, Icon, AddIcon, InfoIcon, ButtonSpinner, ArrowUpIcon, HStack, ThreeDotsIcon, Input, InputField, } from "@gluestack-ui/themed";

export default function Button_lg() {
  return (
    <Button
      size="lg"
      bg="$blue700"
      $hover-bg="$green50"
      $active-bg="$green900"
      color="$white"
      $borderRadius="$xl"
    >
      <ButtonText>Iniciar sesión</ButtonText>
    </Button>
  )
}