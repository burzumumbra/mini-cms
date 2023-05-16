"use client"; // this is a client component 👈🏽

import blogs from '../../data/blogs';
import { Flex, Title, Text, Card } from "@tremor/react";
import Link from 'next/link';

export default function Blog() {
  
  return (
    <main className="flex flex-col gap-4 items-center justify-start px-6 pt-12">
      <Flex><Title>Blog</Title> <Link className="bg-green-200 hover:bg-green-600 hover:text-white p-2" href="/posts/create">Add Post</Link> </Flex>
      <Link className="h-[400px] w-full" href={`/posts/${blogs[0].id}`}>
        <Flex className="relative bg-blend-overlay bg-slate-600 h-[400px] bg-cover bg-[url('../../public/hero-bg.jpeg')]">
          <Card className="flex flex-col max-w-[300px] bg-slate-200 hover:bg-green-200 absolute bottom-4 right-4 p-2">
            <Title>{blogs[0].title}</Title>
            <Text>{blogs[0].description}</Text>
          </Card>
        </Flex> 
      </Link>

      <Flex className="gap-2">  
        { blogs.slice(1).map((blog) => (
          <Link key={blog.id} href={`/posts/${blog.id}`}>
            <Flex className="relative bg-blend-overlay">
              <Card className="flex flex-col max-w-[300px] h-[250px] bg-slate-200 hover:bg-green-200 p-2">
                <Title>{blog.title}</Title>
                <Text>{blog.description}</Text>
              </Card>
            </Flex>
          </Link>
        ))
        }
      </Flex>

    </main>
  )
}
