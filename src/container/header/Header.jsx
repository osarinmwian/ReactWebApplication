import React from 'react'
import './header.css'
import forum from '../../assets/forum.png'
import ai from '../../assets/ai.png'

const Header = () => {
  return (
    <div className= "gpt3__header section_padding" id="Home">
      <div className="gpt3__header-content">
        <h1 className="gradient__text">Let’s Build
                amazing website with DI</h1>
                <p>Yet bed any for travelling assistance indulgence unpleasing.
                   Not thoughts all exercise blessing. Indulgence way everything joy 
                  alteration boisterous the attachment. Party we years to order allow asked of.</p>
                <div className="gpt3__header-content__input">
                  <input type= "Email" placeholder="Enter Email Address"/>
                  <button type="button" >Get Sterted</button>
                </div>
                <div className="gpt3__header-content__people">
                  <img src={forum} alt="forum"/>
                  <p>1,600 people requested access a visit in last 24 hours</p>
                </div>
      </div>
      <div className="gpt3__header-image">
                  <img src={ai} alt ="ai"></img>
      </div>
    </div>
  )
}

export default Header