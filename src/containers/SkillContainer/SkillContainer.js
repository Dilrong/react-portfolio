import React, { Component } from 'react'
import './SkillContainer.css'

class SkillContainer extends Component {
  render() {
    return (
      <div className='SkillContainer'>
      <div>
        <h1 className='SkillTitle'>Front-End</h1>
        <div className='FrontContainer'>
        <div className='OverlayContainer'>
          <img className='SkillIcon' alt='react' src='https://s3.ap-northeast-2.amazonaws.com/portfolio.dilrong.com/react-logo.png'/>
          <div className="SkillOverlay">Strong</div>
        </div>
        <div className='OverlayContainer'>
          <img className='SkillIcon' alt='redux' src='https://s3.ap-northeast-2.amazonaws.com/portfolio.dilrong.com/Redux-logo.png'/>
          <div className="SkillOverlay">Knowledgeable</div>
        </div>
        <div className='OverlayContainer'>
          <img className='SkillIcon' alt='unity' src='https://s3.ap-northeast-2.amazonaws.com/portfolio.dilrong.com/Unity-logo.png'/>
          <div className="SkillOverlay">Knowledgeable</div>
        </div>
        <div className='OverlayContainer'>
          <img className='SkillIcon' alt='android' src='https://s3.ap-northeast-2.amazonaws.com/portfolio.dilrong.com/Android-logo.png'/>
          <div className="SkillOverlay">Knowledgeable</div>
        </div>
        </div>
      </div>
      <div>
      <h1 className='SkillTitle'>Back-End</h1>
      <div className='FrontContainer'>
        <div className='OverlayContainer'>
          <img className='SkillIcon' alt='docker' src='https://s3.ap-northeast-2.amazonaws.com/portfolio.dilrong.com/docker-logo.png'/>
          <div className="SkillOverlay">Knowledgeable</div>
        </div>
        <div className='OverlayContainer'>
          <img className='SkillIcon' alt='aws' src='https://s3.ap-northeast-2.amazonaws.com/portfolio.dilrong.com/aws-logo.png'/>
          <div className="SkillOverlay">Knowledgeable</div>
        </div>
        <div className='OverlayContainer'>
          <img className='SkillIcon' alt='node' src='https://s3.ap-northeast-2.amazonaws.com/portfolio.dilrong.com/node-logo.png'/>
          <div className="SkillOverlay">Strong</div>
        </div>
        <div className='OverlayContainer'>
          <img className='SkillIcon' alt='flask' src='https://s3.ap-northeast-2.amazonaws.com/portfolio.dilrong.com/flask-logo.png'/>
          <div className="SkillOverlay">Knowledgeable</div>
        </div>
        <div className='OverlayContainer'>
          <img className='SkillIcon' alt='nginx' src='https://s3.ap-northeast-2.amazonaws.com/portfolio.dilrong.com/NGINX-logo.png'/>
          <div className="SkillOverlay">Knowledgeable</div>
        </div>
      </div>
      </div>
      <div>
        <h1 className='SkillTitle'>ETC</h1>
        <div className='FrontContainer'>
        <div className='OverlayContainer'>
          <img className='SkillIcon' alt='mysql' src='https://s3.ap-northeast-2.amazonaws.com/portfolio.dilrong.com/mysql-logo.png'/>
          <div className="SkillOverlay">Knowledgeable</div>
        </div>
        <div className='OverlayContainer'>
          <img className='SkillIcon' alt='git' src='https://s3.ap-northeast-2.amazonaws.com/portfolio.dilrong.com/git-logo.png'/>
          <div className="SkillOverlay">Strong</div>
        </div>
        <div className='OverlayContainer'>
          <img className='SkillIcon' alt='jenkins' src='https://s3.ap-northeast-2.amazonaws.com/portfolio.dilrong.com/jenkin-logo.png'/>
          <div className="SkillOverlay">Knowledgeable</div>
        </div>
        <div className='OverlayContainer'>
          <img className='SkillIcon' alt='sketch' src='https://s3.ap-northeast-2.amazonaws.com/portfolio.dilrong.com/sketch-logo.png'/>
          <div className="SkillOverlay">Knowledgeable</div>
        </div>
        </div>
      </div>
      </div>
    );
  }
}

export default SkillContainer;
