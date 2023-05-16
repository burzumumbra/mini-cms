import { faker } from '@faker-js/faker';
import { BlogType } from '../data/types';

const blogs: BlogType[] = [
  {
    id: faker.string.uuid(),
    title: faker.lorem.sentence(),
    content: faker.lorem.paragraphs(),
    description: faker.lorem.paragraphs(1),
  },
  {
    id: faker.string.uuid(),
    title: faker.lorem.sentence(),
    content: faker.lorem.paragraphs(),
    description: faker.lorem.paragraphs(1),
  },
  { 
    id: faker.string.uuid(),
    title: faker.lorem.sentence(),
    content: faker.lorem.paragraphs(),
    description: faker.lorem.paragraphs(1),
  },
  {
    id: faker.string.uuid(),
    title: faker.lorem.sentence(),
    content: faker.lorem.paragraphs(),
    description: faker.lorem.paragraphs(1),
  },
];

export default blogs;