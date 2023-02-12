import { useState } from "react"
import { Container } from "./styles/app"

export function App() {

  const [num, setNum] = useState(0)
  const [previousNum, setPreviousNum] = useState("")
  const [currentNum, setCurrentNum] = useState("")
  const [result, setResult] = useState()
  const [operator, setOperator] = useState("")

  function inputNum(e) {
    var input = e.target.value

    if (num === 0) {
      setNum(input)
    } else {
      setNum(num + input)
    }
  }

  function clear() {
    setNum("")
    setPreviousNum("")
    setCurrentNum("")
    setOperator()
    setResult("")
  }

  function deleteNum() {
    setNum("")
  }

  function percent() {
    setResult(num / 100)
    setNum("")
  }

  function changeSign() {
    if (num > 0) {
      setNum(-num)
    } else {
      setNum(Math.abs(num))
    }
  }

  function operatorHandler(e) {
    var operatorInput = e.target.value
    setOperator(operatorInput)
    setPreviousNum(num)
    setNum("")
  }

  function calculate() {
    if (operator === "/") {
      setResult(previousNum / num)
      setCurrentNum(num)
      setNum("")
      
    } 
    else if (operator === "x") {
      setResult(previousNum * num)
      setCurrentNum(num)
      setNum("")
      
    }
    else if (operator === "-") {
      setResult(previousNum - num)
      setCurrentNum(num)
      setNum("")
    }
    else if (operator === "+") {
      setResult(parseFloat(previousNum) + parseFloat(num))
      setCurrentNum(num)
      setNum("")
    }
  }

  return (
    <Container>
      <div className="output">
        <div className="previous-operand">{previousNum} {operator} {currentNum}</div>
        <div className="current-operand">{num}</div>
        <div className="result">{result}</div>
      </div>
      <button className="ac" onClick={clear}>AC</button>
      <button onClick={deleteNum}>DEL</button>
      <button onClick={percent}>%</button>
      <button className="operation" onClick={operatorHandler} value="/">/</button>
      <button onClick={inputNum} value={1}>1</button>
      <button onClick={inputNum} value={2}>2</button>
      <button onClick={inputNum} value={3}>3</button>
      <button className="operation" onClick={operatorHandler} value="x">x</button>
      <button onClick={inputNum} value={4}>4</button>
      <button onClick={inputNum} value={5}>5</button>
      <button onClick={inputNum} value={6}>6</button>
      <button className="operation" onClick={operatorHandler} value="-">-</button>
      <button onClick={inputNum} value={7}>7</button>
      <button onClick={inputNum} value={8}>8</button>
      <button onClick={inputNum} value={9}>9</button>
      <button className="operation" onClick={operatorHandler} value="+">+</button>
      <button onClick={changeSign}>+/-</button>
      <button onClick={inputNum} value={0}>0</button>
      <button onClick={inputNum} value={"."}>.</button>
      <button className="equal" onClick={calculate}>=</button>
    </Container>
  )
}
