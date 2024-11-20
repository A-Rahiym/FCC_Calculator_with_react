/* eslint-disable no-unused-vars */
import React from 'react'

const Button = ({ID,Class,Click,Label}) => {
  return (
    <div>
        <button id={ID} className={Class} onClick={Click}>{Label}</button>
    </div>
  )
}

export default Button