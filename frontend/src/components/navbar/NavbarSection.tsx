import { ReactNode } from 'react';
import styled from 'styled-components';
import Navbar from './Navbar';

interface Props {
  children: ReactNode;
}

export default function NavbarSection({ children }: Props) {
  return (
    <>
      <Navbar />

      <Section>{children}</Section>
    </>
  );
}

const Section = styled.section`
  position: relative;
  display: block;
  margin-left: 80px;

  ${({ theme }) => theme.media.mobile} {
    margin-left: 0;
    margin-bottom: 80px;
  }
`;
