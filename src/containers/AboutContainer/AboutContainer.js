import React, { Component } from 'react'
import './AboutContainer.css'

class AboutContainer extends Component {
  render() {
    return (
      <div className='AboutContainer'>
      <img className='AboutPhoto' alt='AboutPhoto' src='https://s3.ap-northeast-2.amazonaws.com/portfolio.dilrong.com/profile.png'/>
      <h1 className='AboutTitle'>프로그램을 사유하는 개발자</h1>
      <hr className='AboutLine'/>
      <div className='AboutText'>
        <p>개발자를 주어진 기능만을 구현하는 사람이 아닙니다.</p>
        <p>개발자는 프로그램이 어떻게 동작하는지, 어디서 동작하는지, 왜 동작하는지</p>
        <p>생각할 수 있어야하고 필요에 따라서 기능을 만들 수 있는 사람입니다.</p>
        <p>저는 그런 사람이 되기 위해서 수 많은 경험과 지식을 습득하고 있는 개발자입니다.</p>
      </div>
      <div className='AboutWhy'>
      <div><p className='AboutNumber'>100</p>권의 연간 독서</div>
      <div><p className='AboutNumber'>2</p>번의 창업</div>
      <div><p className='AboutNumber'>1</p>Full-Stack개발</div>
      </div>
    </div>
    );
  }
}

export default AboutContainer;