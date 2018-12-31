import React, { Component } from 'react'
import './ContactContainer.css'

class ContactContainer extends Component {
  render() {
    return (
      <div className='ContactContainer'>
          <h1 className='ContactTitle'>Contact</h1>
          <hr className='ContactLine'/>
          <div className='ContactLogo'>
            <a href='https://blog.naver.com/dilrong'><img className='ContactLogo' alt='Blog' src='https://s3.ap-northeast-2.amazonaws.com/portfolio.dilrong.com/blogger-logo.png'/></a>
            <a href='https://github.com/Dilrong'><img className='ContactLogo' alt='Github' src='https://s3.ap-northeast-2.amazonaws.com/portfolio.dilrong.com/github-logo.png'/></a>
            <a href='/'><img className='ContactLogo' alt='Document' src='https://s3.ap-northeast-2.amazonaws.com/portfolio.dilrong.com/document-logo.png'/></a>
          </div>
          <h2 className='ContactEmailTtile'>Email</h2>
          <p className='ContactEmail'>dilrong@dilrong.com</p>
      </div>
    );
  }
}

export default ContactContainer;
