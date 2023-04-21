// TODO 다 임시임
export interface Post {
  id: number;
  images: string[];
  title: string;
  content: string;
}

const posts: Post[] = [
  {
    id: 1,
    images: [
      'https://images.unsplash.com/photo-1678463645386-c7f4cc8de44e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=708&q=80',
      'https://images.unsplash.com/photo-1678435648396-cd10b362a35e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80',
    ],
    title: '안녕하세요!! 프로젝트 팀원 구합니다~',
    content: '반갑습니다~~~~~~~ㅁㄴㅇㄹ ㅁㄴㅇㄹ!!',
  },
  {
    id: 2,
    images: [
      'https://images.unsplash.com/photo-1678463645386-c7f4cc8de44e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=708&q=80',
      'https://images.unsplash.com/photo-1678435648396-cd10b362a35e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80',
    ],
    title: 'cv',
    content: 'bbbbbbbbbbbb',
  },
  {
    id: 3,
    images: [
      'https://images.unsplash.com/photo-1678463645386-c7f4cc8de44e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=708&q=80',
      'https://images.unsplash.com/photo-1678435648396-cd10b362a35e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80',
    ],
    title: 'cv',
    content: 'bbbbbbbbbbbb',
  },
];

export default posts;
