import type { IPost, IPostEnriched } from '~/interfaces';

export const usePostsStore = defineStore('posts', () => {
  const dummyClient = useDummyClient();
  const loading = ref(false);

  const posts = ref<IPostEnriched[]>([]);
  const currentPost = ref<IPostEnriched>({} as IPostEnriched);

  const fetch = async () => {
    if (posts.value.length > 0) {
      return;
    }
    loading.value = true;
    try {
      const data = await dummyClient.getPosts();
      posts.value = data.posts.map((post) => ({ ...post, likeStatus: null }));
    } catch (e) {
    } finally {
      loading.value = false;
    }
    return true;
  };

  const fetchCurrentPost = async (postId: number) => {
    let post = posts.value.filter((post) => post.id === postId)[0];
    if (!post) {
      post = {
        ...await dummyClient.getPost(postId),
        likeStatus: null,
      };
      posts.value.push(post);
    }
    currentPost.value = post;
    return true;
  };

  const setLikeStatus = async (postId: number, likeStatus: boolean | null) => {
    const post = useFirst(posts.value.filter((post) => post.id === postId))!;
    post.likeStatus = likeStatus;
  };

  return { currentPost, posts, fetch, fetchCurrentPost, setLikeStatus };
});
