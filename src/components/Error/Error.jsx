import React from 'react'
import { icons, svg } from '../../constants' 
import './error.css'

const Error = () => {
  return (
    <>
      <div className="app__error app-flex">
          <img loading="lazy" decoding="async" src={svg.error} alt="" />
        
      </div>
    </>
  )
}

export default Error