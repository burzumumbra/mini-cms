"use client"; // this is a client component 👈🏽

import { useGetPostById } from '@/app/hooks/posts';
import { Flex, Title, Text, Card } from "@tremor/react";
import Link from 'next/link';

const Post = ({ params }: { params: { slug: string } }) => {
  const post = useGetPostById(params.slug);
  return (
    <main className="flex flex-col gap-4 items-center justify-start px-6 pt-12">
      <Title>{post?.title}</Title>
      <Flex flexDirection='col' justifyContent='center' className="relative">
        <Card className="flex flex-col items-center justify-center max-w-[50vw] bg-slate-200 p-2">
          <Text>{post?.content}</Text>
        </Card>
        <Link className="mt-6 p-2 rounded hover:bg-blue-400 hover:text-white" href={`/posts/edit/${post?.id}`}>Edit post</Link>
      </Flex> 
    </main>
  )
}

export default Post;