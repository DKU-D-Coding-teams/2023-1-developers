export interface Profile {
  // TODO: 나중에 이름들 다 API에 맞게 갈아끼기. typescript는 interface에서 딸깍 이름변경 가능
  id: number;
  profileImg: string;
  name: string;
  studentInfo: string;
  singleIntroduce: string;
  email: string;
  tags: string[];
  links: string[];
  detailedIntroduce: string;
}

const profiles: Profile[] = [
  {
    id: 1,
    profileImg:
      'https://images.unsplash.com/photo-1678463645386-c7f4cc8de44e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=708&q=80',
    name: '김철수',
    studentInfo: '컴퓨터공학과 20학번 재학',
    singleIntroduce: '안녕하세요~ 안드로이드 개발자로 활동하고 있습니다!',
    email: 'asdf@dankook.ac.kr',
    tags: ['Android', 'Kotlin'],
    links: ['asdf', 'zxcv'],
    detailedIntroduce: '이건 왜 안되지\n- ㅁㄴㅇㄹ\n- ㅋㅌㅊㅍ',
  },
  {
    id: 2,
    profileImg:
      'https://images.unsplash.com/photo-1678435648396-cd10b362a35e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80',
    name: '이기윤',
    studentInfo: '소프트웨어 22학번 재학',
    singleIntroduce: '안녕하세요~ 프론트엔드 공부하고 있어요. React에 관심이 있습니다.',
    email: 'zxcv@dankook.ac.kr',
    tags: ['Javascript', 'React'],
    links: ['https://github.com/bubbletea03', 'http://blog.naver.com/bubbletea03'],
    detailedIntroduce: '',
  },
  {
    id: 3,
    profileImg:
      'https://images.unsplash.com/photo-1678435648396-cd10b362a35e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80',
    name: '이기윤',
    studentInfo: '소프트웨어 22학번 재학',
    singleIntroduce: '안녕하세요~ 프론트엔드 공부하고 있어요. React에 관심이 있습니다.',
    email: 'qwer@dankook.ac.kr',
    tags: ['Javascript', 'React', 'Frontend'],
    links: ['https://github.com/bubbletea03', 'http://blog.naver.com/bubbletea03'],
    detailedIntroduce: '',
  },
  {
    id: 4,
    profileImg:
      'https://images.unsplash.com/photo-1678435648396-cd10b362a35e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80',
    name: '이기윤',
    studentInfo: '소프트웨어 22학번 재학',
    singleIntroduce: '안녕하세요~ 프론트엔드 공부하고 있어요. React에 관심이 있습니다.',
    email: 'qwer@dankook.ac.kr',
    tags: ['Javascript', 'React', 'Frontend'],
    links: ['https://github.com/bubbletea03', 'http://blog.naver.com/bubbletea03'],
    detailedIntroduce: '',
  },
  {
    id: 5,
    profileImg:
      'https://images.unsplash.com/photo-1678435648396-cd10b362a35e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80',
    name: '이기윤',
    studentInfo: '소프트웨어 22학번 재학',
    singleIntroduce: '안녕하세요~ 프론트엔드 공부하고 있어요. React에 관심이 있습니다.',
    email: 'qwer@dankook.ac.kr',
    tags: ['Javascript', 'React', 'Frontend'],
    links: ['https://github.com/bubbletea03', 'http://blog.naver.com/bubbletea03'],
    detailedIntroduce: '',
  },
];

export default profiles;
