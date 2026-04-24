import React from 'react'

const PrimaryButton = (props) => {
  return (
    <a href="#contact" className="primarybtn">{props.text}</a>
  )
}
const SecondaryButton = (props) => {
  return (
    <a href="#contact" className="secondarybtn">{props.text}</a>
  )
}

export  { PrimaryButton, SecondaryButton}
