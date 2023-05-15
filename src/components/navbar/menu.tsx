import { Flex, Text } from '@tremor/react';
import Link from 'next/link';
import Image from 'next/image';

const Menu = () => {

  return (
    <Flex className="max-w-[250px]">
      <Link href="/"> <Image src="/next.svg" width="50" height="50" alt="logo" /> </Link>
      <Link href="/"><Text>Home</Text></Link>
      <Link href="/about"><Text>About</Text></Link>
      <Link href="/blog"><Text>Blog</Text></Link>
      <Link href="/contact"><Text>Contact</Text></Link>
    </Flex>
  );

}

export default Menu;