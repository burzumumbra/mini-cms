import { faker } from '@faker-js/faker';
import { Title, Text } from "@tremor/react";

export default function Contact() {
  return (
    <main className="flex flex-col items-center justify-between pt-12">
      <Title>Contact us</Title>
      <Text className="max-w-[400px]">{faker.company.name()}</Text>
      <Text className="max-w-[400px]">{faker.location.streetAddress(true)}</Text>
      <Text className="max-w-[400px]">{faker.location.city() }, {faker.location.state({ abbreviated: true })} {faker.location.zipCode('####')}</Text>
      <Text className="max-w-[400px]">{faker.phone.number('+48 91 ### ## ##')}</Text>
    </main>
  )
}
