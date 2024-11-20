/* eslint-disable no-unused-vars */
import React from 'react'

const buttonPress = (string) => {
  console.log(string)
  }
  

const Button = ({ID,Class,Click,Label,...otherprops}) => {
  return (
    <div>
        <button id={ID} className={Class} onClick={() => {buttonPress(Label)}} {...otherprops}>{Label}</button>
    </div>
  )
}

export default Button