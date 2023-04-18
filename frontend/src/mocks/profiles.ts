import { DetailedProfile } from 'api';

const profiles: DetailedProfile[] = [
  {
    id: 1,
    s3ImagePath:
      'https://images.unsplash.com/photo-1678463645386-c7f4cc8de44e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=708&q=80',
    name: '김철수',
    studentId: '1',
    introduce: '안녕하세요~ 안드로이드 개발자로 활동하고 있습니다!',
    tags: ['Android', 'Kotlin'],
    githubLink: 'https://github.com/DKU-D-Coding-teams/2023-1-developers',
    blogLink: 'https://github.com/DKU-D-Coding-teams/2023-1-developers',
    detailIntroduce: '이건 왜 안되지\n- ㅁㄴㅇㄹ\n- ㅋㅌㅊㅍ',
    hits: 35,
    affiliation: '컴퓨터공학과 20학번 재학',
    comments: [
      {
        id: 1,
        author: 'asdf',
        secret: false,
        replies: [{ id: 52, author: 'ㅌㅋㅊㅍ퓨', content: 'ㅁㄴㅇㄹ' }],
        content: 'ㅁㄴㅇㄹ',
      },
      {
        id: 1,
        author: 'asdf',
        secret: false,
        replies: [{ id: 52, author: 'ㅌㅋㅊㅍ퓨', content: 'ㅁㄴㅇㄹ' }],
        content: 'ㅁㄴㅇㄹ',
      },
    ],
  },
  {
    id: 2,
    s3ImagePath:
      'https://images.unsplash.com/photo-1678435648396-cd10b362a35e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80',
    name: '홍길동',
    studentId: '2',
    introduce: '안녕하세요~ 웹개발자 지망하고 잇습니다. 요즘 리액트를 공부중입니다~',
    tags: ['React', 'Frontend'],
    githubLink: 'https://github.com/DKU-D-Coding-teams/2023-1-developers',
    blogLink: 'https://github.com/DKU-D-Coding-teams/2023-1-developers',
    detailIntroduce: '##ㅌㅅㅌㅅㅌㅅ\n- ㅇㅇㅇㅇㅇㅇㅇㅇ\n- ㄹㄹㄹㄹㄹㄹㄹㄹ',
    hits: 35,
    affiliation: '소프트웨어학과 20학번 재학',
    comments: [
      {
        id: 1,
        author: 'asdf',
        secret: false,
        replies: [],
        content: 'ㅁㄴㅇㄹ',
      },
    ],
  },
  {
    id: 3,
    s3ImagePath:
      'https://images.unsplash.com/photo-1678435648396-cd10b362a35e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80',
    name: '김유리',
    studentId: '3',
    introduce: '백엔드 개발자입니다~ ㅁㄴㅇㄹasdfㅁㄴㅇㄹasdf',
    tags: ['Backend', 'Frontend', 'Spring', 'Java'],
    githubLink: 'https://github.com/DKU-D-Coding-teams/2023-1-developers',
    blogLink: 'https://github.com/DKU-D-Coding-teams/2023-1-developers',
    detailIntroduce: '##ㅌㅅㅌㅅㅌㅅ\n- ㅇㅇㅇㅇㅇㅇㅇㅇ\n- ㄹㄹㄹㄹㄹㄹㄹㄹ',
    hits: 35,
    affiliation: '모바일시스템공학과 19학번 재학',
    comments: [
      {
        id: 1,
        author: 'asdf',
        secret: false,
        replies: [],
        content: 'ㅁㄴㅇㄹ',
      },
    ],
  },
];

export default profiles;
