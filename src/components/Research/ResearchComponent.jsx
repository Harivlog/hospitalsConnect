import React from 'react'
import { svg } from '../../constants'
import BlogCom from '../BlogComponnet/BlogCom'
import { BlogFeatures } from '../Blogs/blogData'
import './Research.css'

const ResearchComponent = () => {
  return (
    <>
    <div className="App__research">
     <h1 className='md-heading'>Research</h1>
     <div className="App__blog-features-heading">
                            <h2>Features</h2>
                            <a href="">More   <img loading="lazy" decoding="async" src={svg.Arrow} alt="" /></a>
                            
                        </div>
     <div className="App__blog-features-content">
                            {
                                BlogFeatures.map((item)=>{
                                    return (
                                        <BlogCom key={item.id} title={item.title} img={item.img} discription={item.discription} update={item.update}/>
                                    )
                                })
                            }
                        </div>
    </div>
    </>
  )
}

export default ResearchComponent