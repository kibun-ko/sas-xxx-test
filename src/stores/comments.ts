import type { IComment, IPage } from '~/interfaces';

export const useCommentsStore = defineStore('comments', () => {
  const dummyClient = useDummyClient();

  const comments = ref<IComment[]>([]);
  const page = ref<IPage>({
    total: 0,
    skip: 0,
    limit: 0,
  });

  const fetch = async (postId: number) => {
    const data = await dummyClient.getCommentsForPost(postId);
    page.value = {
      total: data.total,
      skip: data.skip,
      limit: data.limit,
    };
    comments.value = data.comments;
  };

  const deleteComment = async (commentId: number) => {
    comments.value = comments.value.filter((comment) => comment.id !== commentId);
    page.value.total--;
  };

  function $reset() {
    comments.value = [];
    page.value = {
      total: 0,
      skip: 0,
      limit: 0,
    };
  }

  return { comments, page, fetch, deleteComment, $reset };
});
