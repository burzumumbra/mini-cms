import { Flex, Title, Text } from "@tremor/react";

const Hero = () => {
  return (
    <Flex className="relative bg-blend-overlay bg-slate-600 h-[400px] bg-cover bg-[url('../../public/hero-bg.jpeg')]">
      <div className="flex flex-col max-w-[300px] bg-slate-200 absolute bottom-4 right-4 p-2">
        <Title>Lorem ipsum dolor</Title>
        <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</Text>
      </div>
    </Flex>
  );
};

export default Hero;