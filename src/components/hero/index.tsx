import { Flex, Title, Text } from "@tremor/react";
import { faker } from '@faker-js/faker';

const Hero = () => {
  return (
    <Flex className="relative bg-blend-overlay bg-slate-600 h-[400px] bg-cover bg-[url('../../public/hero-bg.jpeg')]">
      <div className="flex flex-col max-w-[300px] bg-slate-200 absolute bottom-4 right-4 p-2">
        <Title>{faker.lorem.lines(1)}</Title>
        <Text>{faker.lorem.lines(2)}</Text>
      </div>
    </Flex>
  );
};

export default Hero;