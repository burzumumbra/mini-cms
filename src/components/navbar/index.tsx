import { Flex } from "@tremor/react";
import Search from "@/components/navbar/search";
import Menu from "@/components/navbar/menu";

type NavbarProps = {
  children?: React.ReactNode;
};

const NavbarComponent = ({children}: NavbarProps) => (
  <Flex className="px-6">
    <Menu />
    <Search />
    {children}
  </Flex>
);

export default NavbarComponent;