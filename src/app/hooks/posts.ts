import blogs from '../../data/blogs';

export const useGetPostById = (id: string) => {
  const post = blogs.find((post) => post.id === id);

  return post;
}
