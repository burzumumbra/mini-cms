"use client"; // this is a client component 👈🏽

import blogs from '../../data/blogs';
import { Flex, Title, Text } from "@tremor/react";
import Link from 'next/link';

export default function Blog() {
  
  return (
    <main className="flex flex-col gap-4 items-center justify-start px-6">
      <Title>Blog</Title>
      <Link onClick={()=> console.log(blogs[0].id)} className="h-[400px] w-full" href={`/posts/${blogs[0].id}`}>
        <Flex className="relative bg-blend-overlay bg-slate-600 h-[400px] bg-cover bg-[url('../../public/hero-bg.jpeg')]">
          <div className="flex flex-col max-w-[300px] bg-slate-200 absolute bottom-4 right-4 p-2">
            <Title>{blogs[0].title}</Title>
            <Text>{blogs[0].description}</Text>
          </div>
        </Flex> 
      </Link>
    </main>
  )
}
