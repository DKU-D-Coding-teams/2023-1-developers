import { isDarkThemeState } from "storage";
import { useRecoilState } from "recoil";
import styled from "styled-components";

export default function ThemeButton() {
  const [isDarkTheme, setDarkTheme] = useRecoilState(isDarkThemeState);

  const changeTheme = () => {
    setDarkTheme(!isDarkTheme);
  };

  return (
    <Button onClick={changeTheme}>
      <img src={isDarkTheme ? "/icons/sun.png" : "/icons/moon.png"} />
    </Button>
  );
}

const Button = styled.button`
  position: fixed;
  right: 20px;
  bottom: 100px;

  width: 50px;
  height: 50px;

  background-color: ${({ theme }) => theme.colors.themeBtn};
  border-radius: 70%;

  box-shadow: 1px 1px 10px 1px rgba(0, 0, 0, 0.5);

  opacity: 0.3;

  transition: opacity 0.3s, background-color 1s;

  img {
    width: 40px;
    height: 40px;
    margin-left: 5px;
    margin-top: 3px;
  }

  &:hover {
    opacity: 1;
  }
`;
