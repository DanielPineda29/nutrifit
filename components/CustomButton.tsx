import { Center, Button, ButtonText, ButtonIcon, ButtonGroup, Icon, AddIcon, InfoIcon, ButtonSpinner, ArrowUpIcon, HStack, ThreeDotsIcon, Input, InputField, } from "@gluestack-ui/themed";
import React,{FC} from 'react';

interface ButtonProps {
  name: string;
  onClick: () => void;
}

const CustomButton: React.FC<ButtonProps> = (props) => {
  return (
    <Button
      size="lg"
      backgroundColor="$blue700"
      $hover-bg="$green50"
      $active-bg="$green900"
      onPress={props.onClick}
    >
      <ButtonText>{props.name}</ButtonText>
    </Button>
  );
};
export default CustomButton;