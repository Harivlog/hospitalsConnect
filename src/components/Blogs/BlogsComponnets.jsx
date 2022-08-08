import React from 'react'
import './Blog.css'
import { BlogData ,BlogFeatures, BlogPopular } from './blogData'
import { svg } from '../../constants'
import BlogCom from '../BlogComponnet/BlogCom'
import { Link } from 'react-router-dom'

const BlogsComponents = () => {
   
    return (
        <>
            <section className='App__blog App__sec'>
                <div className="App__blog-hero-img">
                    <h1 className='xdd-heading'>
                        The <br /> HospitalSconnect <br /> Blog
                    </h1>
                </div>
                <div className='App__blog-container'>
                    <div className="App__blog-hero-card-wrap">
                        {
                            BlogData.map((item) => {
                                return (
                                    <div key={item.id} className="App__blog-card">
                                        <div className='App__blog-hero-card-img'>  <img loading="lazy" decoding="async" src={item.img} alt="doctor" /></div>
                                        <div className='card__dis'>
                                            <h3>{item.title}</h3>
                                            <p className='text'>{item.discription}</p>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                    <div className="App__blog-content-wrap">
                    <div className="App__blog-content">
                        <div className="App__blog-features-heading">
                            <h2>Features</h2>
                            <a href="">More   <img loading="lazy" decoding="async" src={svg.Arrow} alt="" /></a>
                            
                        </div>
                        <div className="App__blog-features-content">
                            {
                                BlogFeatures.map((item)=>{
                                    return (
                                        <Link 
                                        to="resscue"
                                        
                                        key={item.id}
                                        style={{color : '#000'}}
                                       
                                        >
                                        <BlogCom title={item.title} img={item.img} discription={item.discription} update={item.update}/>

                                        </Link>
                                                                            )
                                })
                            }
                        </div>
                    </div>
                    <div className="App__blog-content">
                        <div className="App__blog-features-heading">
                            <h2>Popular</h2>
                            <a href="">More   <img loading="lazy" decoding="async" src={svg.Arrow} alt="" /></a>
                            
                        </div>
                        <div className="App__blog-features-content">
                            {
                                BlogPopular.map((item)=>{
                                    return (
                                        <Link to="resscue"   key={item.id} style={{color : '#000'}}>
                                        <BlogCom title={item.title} img={item.img} discription={item.discription} update={item.update}/>
                                        </Link>
                                        )
                                })
                            }
                        </div>
                    </div>

                    </div>
                </div>
            </section>
        </>
    )
}

export default BlogsComponents