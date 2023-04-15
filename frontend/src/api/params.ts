export interface RegisterParams {
  email: string;
  gender: 'FEMALE' | 'MALE';
  memberType: 'DKU' | 'GUEST';
  name: string;
  password: string;
}

export interface ProfileParams {
  name: string;
  affiliation: string;
  studentId: string;
  githubLink: string;
  blogLink: string;
  introduce: string;
  detailIntroduce: string;
  tags: string[];
}
