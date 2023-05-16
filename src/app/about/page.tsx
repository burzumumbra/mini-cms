import { faker } from '@faker-js/faker';
import { Title, Text } from "@tremor/react";

export default function About() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-12">
      <div className="flex flex-col gap-2">
        <Title>{faker.lorem.lines(1)}</Title>
        <Text className="max-w-[400px]">{faker.lorem.lines(24)}</Text>
      </div>
    </main>
  )
}
