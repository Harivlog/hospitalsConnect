import React from 'react'
import './varificationcomplete.css'
const VarificationCompleteComponent = () => {
  return (
    <>
       <section className="App__varification-compte App__sec">
       <div className="App__varify-hero">
            <h1 className='xdd-heading' >Congratulations!!<br/>
             Your account is verified</h1>
        </div>
        <div className="App__varification-form   app-flex">
           <form action="submit" className='varified-form'>
               <div className="varify-form-item">
                <label className='heading' htmlFor="">Mobile Number / Email ID</label>
                <input className='text' type="text" placeholder='Mobile Number / Email ID'/>
               </div>
               <div className="varify-form-item">
                <label className='heading' htmlFor="">Password</label>
                <input  className='text password' type="text" placeholder='********'/>
               </div>
               <div className="varify-form-item checkbox">
                <input  type="checkbox" name="" id="" />
                <label htmlFor="">Remember me for 30 days</label>

               </div>
               <div className="varify-form-item checkbox">
                <input  type="checkbox" name="" id="" />
                <label htmlFor="">Login with OTP Instead of Password</label>

               </div>
               <div className="varify-form-item">
                <button className='text' type='submit'>Login</button>
               </div>
           </form>
        </div>

       </section>
    </>
  )
}

export default VarificationCompleteComponent