"use client"; // this is a client component 👈🏽

import { Flex } from "@tremor/react";
import Button from "@/components/button";
import Input from "@/components/input";

const Search = () => {
  return (
    <Flex alignItems="end" className="max-w-[250px] gap-2">
      <Input placeholder="Search" label="Search the site" />
      <Button onClick={() => {}}>
        Search
      </Button>
    </Flex>
  );
};

export default Search;
