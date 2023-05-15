import { TextInput } from "@tremor/react";
import { Flex } from "@tremor/react";
import { Subtitle } from "@tremor/react";

type InputProps = {
  placeholder: string;
  label?: string;
};

const InputComponent = ({placeholder, label}: InputProps) => {

  return (
    <Flex flexDirection="col" justifyContent="end" alignItems="start">
      <Subtitle className="text-xs">{label}</Subtitle> 
      <TextInput placeholder={placeholder} />
    </Flex>
  );

}

export default InputComponent;