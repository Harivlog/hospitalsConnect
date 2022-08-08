import React from 'react'
import {image} from '../../constants'
import './Resscue.css'
import BlogCom from '../BlogComponnet/BlogCom'


const resscueData =  {
  id : 1,
  title : 'Swimming lessons save lives: What parents should know',
  img : '..//assets/img/bas.png',
  
  update : 'Updated May 6, 2022',
  discription : 'Every day, about 11 people die from drowning in the United States. Swimming lessons help save lives and parents should know how to choose the right program and encourage children to learn skills that will help them to stay safe at the beach and around ponds or pools.'
}
const ResscueComponent = () => {
  return (
    <>
        <div className="App__resscue App__sec">
            <div className="App-resscue-hero-img">
                  <img loading="lazy" decoding="async" src={image.bas} alt="" />
            </div>
             <BlogCom title={resscueData.title} img={resscueData.img} update={resscueData.update} discription={resscueData.discription}/>
        </div>
    </>
  )
}

export default ResscueComponent