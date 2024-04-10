import { Center, Button, ButtonText, ButtonIcon, ButtonGroup, Icon, AddIcon, InfoIcon, ButtonSpinner, ArrowUpIcon, HStack, ThreeDotsIcon, Input, InputField, } from "@gluestack-ui/themed";

export default function Button_lg(props: any) {
  return (
    <Button
      size="lg"
      backgroundColor="$blue700"
      $hover-bg="$green50"
      $active-bg="$green900"
      onPress={props.function}
    >
      <ButtonText>{props.name}</ButtonText>
    </Button>
  )
}