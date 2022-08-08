import React from 'react'
import './BlogCom.css'
import { Link } from 'react-router-dom'

const BlogCom = ({ title, update, discription, img }) => {
  return (
    <>
      <section className="App__BlogCom app-grid-two-column">
        <div className="App__BlogCom-heading">
          <h2 className='md-heading'>
            {title}
          </h2>
          <h3 >{update}</h3>
          <p className='text'>
            {discription}
          </p>
        </div>
        <div className="App__BlogCom-img ">
          <img loading="lazy" decoding="async" src={img} alt="" />
        </div>
      </section>
    </>
  )
}

export default BlogCom