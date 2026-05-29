export interface Highlight {
  id: string;
  title: string;
  coverImage: string;
  fullImage?: string;
  images?: string[];
  caption?: string;
}

export interface Story {
  id: string;
  imageUrl: string;
}

export interface User {
  id: string;
  username: string;
  name: string;
  avatar: string;
  bio: string;
  link?: string;
  followers: number;
  following: number;
  postsCount: number;
  highlights?: Highlight[];
  isSecret?: boolean;
  stories?: Story[];
}

export interface Comment {
  id: string;
  username: string;
  text: string;
  timestamp: string;
}

export interface Post {
  id: string;
  username: string;
  imageUrl: string;
  caption: string;
  likes: number;
  comments: Comment[];
  commentCount?: number;
  timestamp: string;
  location?: string;
}
