export interface IGenUser {
  id: number | string;
  name: string;
  email: string;
  posts: Post[]; // Array of posts linked to this user
}

export interface IGenPost {
  id: number | string;
  userId: number; // Foreign key to User
  title: string;
  content: string;
  comments: Comment[]; // Array of comments linked to this post
}

export interface IGenComment {
  id: number | string;
  postId: number; // Foreign key to Post
  author: string;
  text: string;
}

declare module "*.module.scss" {
  const classes: { [key: string]: string };
  export default classes;
}
