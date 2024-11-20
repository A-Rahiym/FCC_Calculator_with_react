/* eslint-disable no-unused-vars */
import React from 'react'


  

const Button = ({ID,Class,Label,...otherprops}) => {
  return (
    <div>
        <button id={ID} className={Class} {...otherprops}>{Label}</button>
    </div>
  )
}

export default Button