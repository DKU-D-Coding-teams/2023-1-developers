import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
	body {
    	margin: 0;
		font-family: 'SUIT-Regular';
		background-color: ${({ theme }) => theme.colors.bg};
		transition: background-color 1s;
	}

	button {
		all: unset;
		cursor: pointer;
	}

	input, textarea {
		border: none;
		outline: none;
		box-sizing: border-box;
	}

	a {
		color: black;
		text-decoration: none;
	}

	@font-face {
		font-family: 'SUIT-Regular';
		src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_suit@1.0/SUIT-Regular.woff2') format('woff2');
		font-weight: normal;
		font-style: normal;
	}

	@font-face {
		font-family: 'S-CoreDream-3Light';
		src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_six@1.2/S-CoreDream-3Light.woff') format('woff');
		font-weight: normal;
		font-style: normal;
	}
`;

export default GlobalStyle;
