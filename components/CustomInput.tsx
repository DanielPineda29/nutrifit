import { FormControlLabel, FormControlLabelText, Input, InputField, View } from '@gluestack-ui/themed';
import React from 'react';

interface CustomInputProps {
  labelText: string;
  value: string;
  onChangeText: (text: string) => void;
}

const CustomInput: React.FC<CustomInputProps> = ({ labelText, value, onChangeText }) => {
  const handleChange = (text: string) => {
    onChangeText(text);
  };

  return (
    <View>
      <FormControlLabel>
        <FormControlLabelText>{labelText}</FormControlLabelText>
      </FormControlLabel>
      <Input>
        <InputField
          value={value || ""}
          onChangeText={handleChange}
        />
      </Input>
    </View>
  );
}

export default CustomInput;
