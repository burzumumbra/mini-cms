import { TextInput } from "@tremor/react";
import { Flex } from "@tremor/react";
import { Subtitle } from "@tremor/react";

type InputProps = {
  placeholder: string;
  label?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value?: string;
};

const InputComponent = ({placeholder, label, onChange, value}: InputProps) => {

  return (
    <Flex flexDirection="col" justifyContent="end" alignItems="start">
      <Subtitle className="text-xs">{label}</Subtitle> 
      <TextInput placeholder={placeholder} value={value} onChange={onChange} />
    </Flex>
  );

}

export default InputComponent;