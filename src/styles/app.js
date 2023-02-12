import styled from "styled-components"

export const Container = styled.div`
  background: #2D2A37;
  padding: 2.5rem 1.5rem 1.5rem 2rem;

  display: grid;
  grid-template-columns: repeat(4, 6rem);
  grid-template-rows: minmax(7rem, auto) repeat(5, 6rem);

  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25), 0px 188px 52px rgba(0, 0, 0, 0.01), 0px 120px 48px rgba(0, 0, 0, 0.04), 0px 68px 41px rgba(0, 0, 0, 0.15), 0px 30px 30px rgba(0, 0, 0, 0.26), 0px 8px 17px rgba(0, 0, 0, 0.29), inset 0px 6px 8px rgba(255, 255, 255, 0.1), inset 0px -4px 5px rgba(0, 0, 0, 0.22);

  border-radius: 4rem;

  .output {
    grid-column: 1 / -1;
    padding: 1rem 1.5rem 2rem;
    letter-spacing: .1rem;

    min-height: 9.5rem;

    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: space-around;
    word-wrap: break-word;
    word-break: break-all;

    .previous-operand {
      font-size: 2rem;
      color: #6B6B6B;
      margin-bottom: .5rem;
    }

    .current-operand, .result{
      font-size: 3rem;
      color: #EBEBEB;
    }
  }

  button {
    border-radius: 50%;
    width: 5rem;
    height: 5rem;

    font-size: 1.7rem;
    color: white;
    border: none;

    background: linear-gradient(180deg, rgba(0, 0, 0, 0.05) 0%, rgba(255, 255, 255, 0.05) 100%), #2D2A37;

    box-shadow: 0px 11px 7px rgba(0, 0, 0, 0.01), 0px 7px 7px rgba(0, 0, 0, 0.04), 0px 4px 6px rgba(0, 0, 0, 0.1), 0px 2px 4px rgba(0, 0, 0, 0.26), 0px 0px 2px rgba(0, 0, 0, 0.29), inset 0px 2px 3px rgba(255, 255, 255, 0.06);

    cursor: pointer;
    transition: .2s;
  }

  button:hover {
    transform: scale(1.1);
  }

  .operation {
    background: linear-gradient(180deg, rgba(0, 0, 0, 0.05) 0.01%, rgba(255, 255, 255, 0.05) 100%), #462878;
  }

  .equal {
    background: linear-gradient(180deg, rgba(0, 0, 0, 0.15) 0%, rgba(255, 255, 255, 0.05) 100%), #7F45E2;
  }

  .ac {
    color: #975DFA;
  }
`