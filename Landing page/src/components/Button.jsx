import React from 'react'
import { Link } from 'react-router-dom'
const PrimaryButton = (props) => {
  return (
    <Link to="/contact" className="primarybtn">{props.text}</Link>
  )
}
const SecondaryButton = (props) => {
  return (
    <Link to="/contact" className="secondarybtn">{props.text}</Link>
  )
}

export  { PrimaryButton, SecondaryButton}
