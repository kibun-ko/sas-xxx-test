import type { IPostsPage, ICommentsPage, IPost } from '~/interfaces';

export const useDummyClient = () => {
  const getPosts = async (skip?: number, limit?: number) => {
    return await $fetch<IPostsPage>('https://dummyjson.com/posts', { params: { skip, limit } });
  };

  const getPost = async (postId: number) => {
    return await $fetch<IPost>(`https://dummyjson.com/posts/${postId}`);
  };

  const getCommentsForPost = async (postId: number, skip?: number, limit?: number) => {
    return await $fetch<ICommentsPage>(`https://dummyjson.com/posts/${postId}/comments`, { params: { skip, limit } });
  };

  return { getPosts, getPost, getCommentsForPost };
};
