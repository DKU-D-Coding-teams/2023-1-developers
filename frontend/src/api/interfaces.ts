export interface RegisterInfo {
  email: string;
  gender: 'FEMALE' | 'MALE';
  memberType: 'DKU' | 'GUEST';
  name: string;
  password: string;
}

export interface ProfileWithoutImg {
  name: string;
  affiliation: string;
  studentId: string;
  githubLink: string;
  blogLink: string;
  introduce: string;
  detailIntroduce: string;
  tags: string[];
}

// all 검색 시 프로필
export interface Profile extends ProfileWithoutImg {
  hits: number;
  id: number;
  s3ImagePath: string;
  authorId?: number;
}

interface CommentWithoutReplies {
  author: string;
  content: string;
  id: number;
  authorId: number;
}

export interface Comment extends CommentWithoutReplies {
  replies: CommentWithoutReplies[];
  secret: boolean;
}

// 세부 검색 시 프로필
export interface DetailedProfile extends Profile {
  comments: Comment[];
}

export interface LoginToken {
  accessToken: string;
  grantType: string;
  refreshToken: string;
  memberId: number;
}
