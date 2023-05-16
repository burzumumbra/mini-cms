import { Text } from "@tremor/react";
import Hero from "@/components/hero";
import { faker } from '@faker-js/faker';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col gap-4 items-center justify-between p-24">
        <Hero />

        <div className="flex flex-row gap-2">
          <Text className="max-w-[400px]">{faker.lorem.lines(4)}</Text>
          <img width={200} src={faker.image.nature(200, 150, true)} alt="hero" />
          <Text className="max-w-[200px]">{faker.lorem.lines(3)}</Text>
        </div>
        <div className="flex flex-row gap-2">
          <img width={200} src={faker.image.nature(100, 150, true)} alt="hero" />
          <img width={200} src={faker.image.nature(100, 150, true)} alt="hero" />
          <img width={200} src={faker.image.nature(100, 150, true)} alt="hero" />
        </div>
      </main>
  )
}
