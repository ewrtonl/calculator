import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;

    font-family: 'Rubik', sans-serif;
  }

  :root {
    font-size: 62.5%;
  }

  body {
    width: (31rem, 90%);
    padding: 2rem;

    background-color: #867ECE;

    display: grid;
    place-items: center;
    height: 100vh;
  }
`