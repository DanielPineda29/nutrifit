import { Heading } from '@gluestack-ui/themed';
import React from 'react';

interface CustomHeaderProps {
  text: string;
}

const CustomHeader: React.FC<CustomHeaderProps> = ({ text }) => {
  return (
    <Heading>{text}</Heading>
  );
}

export default CustomHeader;
