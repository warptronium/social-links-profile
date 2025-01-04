import React from 'react'
import "./ButtonLink.css"

const ButtonLink = (props) => {
  return (
    <div className={`button button-${props.title}`}>
        <a href="#">{props.title}</a>
    </div>   
  )
}

export default ButtonLink