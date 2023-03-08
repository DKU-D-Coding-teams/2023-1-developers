import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
	body {
    	margin: 0;
	}

	button {
		all: unset;
		cursor: pointer;
	}

	input, textarea {
		border: 0;
		box-sizing: border-box;
	}

	a {
		color: black;
		text-decoration: none;
	}
`;

export default GlobalStyle;
