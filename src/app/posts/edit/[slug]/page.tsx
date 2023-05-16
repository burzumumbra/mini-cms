"use client"; // this is a client component 👈🏽

import {Title, Card, Button, Flex, TextInput} from "@tremor/react";
import { useGetPostById } from '@/app/hooks/posts';

const CreatePost = ({ params }: { params: { slug: string } }) => {
  const post = useGetPostById(params.slug);
  console.log(post)
  return (
    <main className="flex flex-col gap-4 items-center justify-start px-6 pt-12">
      <Title>Edit Post</Title>
      <Flex className="max-w-[50vw]">
        <Card className="flex flex-col gap-2">  
          <TextInput placeholder="Post Title" defaultValue={post?.title}/>
          <TextInput className="h-30vh" placeholder="Post Description" defaultValue={post?.description}  />
          <textarea 
            className="pl-4 pr-4 py-2 text-sm font-medium placeholder:text-gray-500 tremor-TextInput-root relative w-full flex items-center min-w-[10rem] focus:outline-none focus:ring-2 bg-white hover:bg-gray-50 text-gray-500 border-gray-300 focus:ring-blue-200 rounded-md border shadow-sm" 
            placeholder="Post Content" 
            defaultValue={post?.content}
          />
          <Button>Save</Button>
        </Card>
      </Flex>
    </main>
  )
}

export default CreatePost;