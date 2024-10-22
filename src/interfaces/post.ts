import type { IPage } from '~/interfaces/page';

export interface IReactions {
  likes: number;
  dislikes: number;
}

export interface IPost {
  id: number;
  title: string;
  body: string;
  tags: string[];
  reactions: IReactions;
  views: number;
  userId: number;
}

export interface IPostEnriched extends IPost {
  likeStatus: boolean | null;
}

export interface IPostsPage extends IPage {
  posts: IPost[];
}
