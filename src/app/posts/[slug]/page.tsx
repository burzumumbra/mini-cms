"use client"; // this is a client component 👈🏽

import { useGetPostById } from '@/app/hooks/posts';
import { useRouter } from 'next/router';
import { Flex, Title, Text } from "@tremor/react";


const Post = ({ params }: { params: { slug: string } }) => {
  // const router = useRouter();
  // const { slug } = router.query;
  // console.log(slug);
  const post = useGetPostById(params.slug);
  console.log(post);
  return (
    <main className="flex flex-col gap-4 items-center justify-start px-6 pt-12">
      <Title>{post?.title}</Title>
      <Flex justifyContent='center' className="relative">
        <div className="flex flex-col items-center justify-center max-w-[300px] bg-slate-200 p-2">
          <Text>{post?.content}</Text>
        </div>
      </Flex> 
    </main>
  )
}

export default Post;