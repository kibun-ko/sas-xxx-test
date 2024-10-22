import type { IPage } from '~/interfaces/page';

export interface IUser {
  id: number;
  username: string;
  fullName: string;
}

export interface IComment {
  id: number;
  body: string;
  postId: number;
  likes: number;
  user: IUser;
}

export interface ICommentsPage extends IPage {
  comments: IComment[];
}
