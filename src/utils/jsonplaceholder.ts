import { get } from './utils';

export interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export async function getPostList(): Promise<Array<Post>> {
  return await get('https://jsonplaceholder.typicode.com/posts');
}
