import React from 'react'
import { HomeArticleData } from './HomeArticleData'

const HomeArticle = () => {
  return (
    <>
       <div className="Home-Article">
        <h1>Read Our Latest Tips & Articles</h1>
        <div className="article-home-card">
            {
                HomeArticleData.map((item , index)=>(
                    <div key={index} className="article-card-box">
                  <div className="card-img-home">
                      <img loading="lazy" decoding="async" src={item.img} alt="" />
                  </div>
                  <div className="card-content">
                    <h3>{item.title}</h3>
                    <p className='text'>{item.content}</p>
                    <a href="" className='text'>{item.link}</a>
                  </div>
            </div>
                ))
            }
        </div>
       </div>
    </>
  )
}

export default HomeArticle