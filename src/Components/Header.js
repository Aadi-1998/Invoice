import React from 'react'
import './Header.css'

const Header = () => {
  return (
    <div  className='Header' >
       <div className='Header-left' >
        <p cn>YN Enterprises</p>
        <p>New Delhi</p>
        <p>9455068676</p>
        </div>
        <div className='Header-right' >
        <p>Invoice no:206</p> 
        
       <p>9 Mar 2022</p> 
       </div> 
    </div>
  )
}

export default Header