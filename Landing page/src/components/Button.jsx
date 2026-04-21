import React from 'react'

const PrimaryButton = (props) => {
  return (
    <button className="primarybtn">{props.text}</button>
  )
}
const SecondaryButton = (props) => {
  return (
    <button className="secondarybtn">{props.text}</button>
  )
}

export  { PrimaryButton, SecondaryButton}
