/* eslint-disable react/jsx-key */
import Button from "./components/Button/Button"
import { buttons } from "./buttons"
import './App.scss'

const App = () => {



  return (
    <>
      <div className='container'>
        <h1>Calculator</h1>
        <div id="calculator">
          <div id="display" style={{ textAlign: 'right' }}>
            <div id="answer">0</div>
            <div id="expression">exp</div>
          </div>
          {buttons.map((button) => < Button Class={button.Class} ID={button.ID}  Label={button.Label} key={button.ID}/>)}
        </div>
      </div>
    </>
  )
}

export default App
