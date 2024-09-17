import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const[arrayValue,setArrayValue] = useState([])
  const[selected,setSelected] = useState("")

  function onPushClick() {
    if (selected == "") return
    const tempArr = [...arrayValue]
    tempArr.push(tempArr.length + 1)
    setArrayValue(tempArr)
  }

  function onPopClick() {
    if (selected == "" || arrayValue.length == 0) return
    if (selected == 'stack') {
      const tempArr = [...arrayValue]
      tempArr.pop()
      setArrayValue(tempArr)
    }
    else {
      const tempArr = [...arrayValue]
      tempArr.shift()
      setArrayValue(tempArr)
    }
  }

  return (
    <div className="wrapper-stackqueue">
      <div className='wrapper-container'>
        <div className='left-container'>
          <h2 className='heading-stackqueue'>SELECT MODE</h2>

          <div className='mode-container'>
            <div className='mode' style={{backgroundColor: selected == "stack" && "white", color: selected == "stack" && "black"}} onClick={() => {setSelected("stack")}}>STACK</div>
            <div className='or'>OR</div>
            <div className='mode' style={{backgroundColor: selected == "queue" && "white", color: selected == "queue" && "black"}} onClick={() => {setSelected("queue")}}>QUEUE</div>
          </div>
 
          <h2 className='heading-stackqueue'>SELECT OPERATION</h2>

          <div className='pushpop-container'>
            <div className='mode' onClick={onPushClick}>PUSH</div>
            <div className='or'>OR</div>
            <div className='mode' onClick={onPopClick}>POP</div>
          </div>
        </div>

        <div className='stackqueue-container'>
          {arrayValue.map((val) => {
            return <div className='stackqueue-value'>{val} </div>
          })}
        </div>
      </div>
    </div>
  )
}

export default App
