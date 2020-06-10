import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  outline: 0;
  box-sizing: border-box;
}

*:focus {
  outline: 0;
}

html, body , #root{
  height: 100%;
}

body{
  -webkit-font-smoothing: antialiased !important;
  background-color: #F1F3F5;
}

body, input , button {
  font-family: 'Poppins', sans-serif;
  color: #282828;
  font-size: 14px;
}

a{
  text-decoration: none;
}

ul {
  list-style: none;
}

button{
  cursor: pointer;
}
`;
