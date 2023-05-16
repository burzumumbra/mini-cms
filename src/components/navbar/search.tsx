"use client"; // this is a client component 👈🏽

import { Flex, List, ListItem } from "@tremor/react";
import Link from "next/link";
import Button from "@/components/button";
import Input from "@/components/input";
import { useState } from "react";
import blogs from "@/data/blogs";
import type { BlogType } from "@/data/types";

const Search = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [suggestions, setSuggestions] = useState<BlogType[]>([]);

  const handleSearch = () => {
    console.log('searching...')
    console.log(blogs);
    // Filter the blogs based on the search term
    const filteredBlogs = blogs.filter(blog => {
      const { title } = blog;
      const searchRegex = new RegExp(searchTerm, 'i'); // Case-insensitive search

      return (
        searchRegex.test(title)
      );
    });
    console.log(filteredBlogs);
    // Set the filtered blogs as suggestions
    setSuggestions(filteredBlogs);
  };

  return (
    <Flex alignItems="end" flexDirection="col">
      <Flex alignItems="end" className="max-w-[250px] gap-2">
        <Input 
          placeholder="Search" 
          label="Search the site" 
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)} />
        <Button onClick={handleSearch}>
          Search
        </Button>
      </Flex>
      <Flex className="max-w-[200px]" flexDirection="row" alignItems="end" justifyContent="end">
        {suggestions.length > 0 && (
          <List>
            {suggestions.map(blog => (
              <ListItem key={blog.id}><Link href={`/posts/${blog?.id}`}>{blog.title}</Link></ListItem>
            ))}
          </List>
        )}
      </Flex>
    </Flex>
  );
};

export default Search;
