import React, { Component } from 'react'
import './App.scss'

class App extends Component {
  render() {
    return (
      <div>
      <section className="intro">
        <h1 className="intro__title">Web Developer of hslee</h1>
        <h3 className="intro__text">with FullStack</h3>
      </section>
      <section className="about">
        <h1 className="about__title">프로그램을 사유하는 개발자</h1>
        <hr/>
        <img className="about__profile" alt="profile" src="/images/img_profile.png"/>
        <h3 className="about__text">
        개발자를 주어진 기능만을 구현하는 사람이 아닙니다.<br/>
        개발자는 프로그램이 어떻게 동작하는지, 어디서 동작하는지, 왜 동작하는지<br/>
        생각할 수 있어야하고 필요에 따라서 기능을 만들 수 있는 사람입니다.<br/>
        저는 그런 사람이 되기 위해서 수 많은 경험과 지식을 습득하고 있는 개발자입니다.<br/>
        </h3>
        <div className="about__container">
          <h3><span className="about__strong">3</span><br/>매주 평균 3권의 책을 읽습니다.</h3>
          <h3><span className="about__strong">2</span><br/>번의 창업경험이 있습니다.</h3>
          <h3><span className="about__strong">1</span><br/>매일 블로그에 1개의 글을 포스팅합니다.</h3>
        </div>
      </section>
      <section className="stack">
        <h1 className="stack__title">Technical Stack</h1>
        <hr/>
        <div className="stack__container">
          <div className="stack__card">
            <h2 className="stack__title">Front-End</h2>
            <hr/>
            <h3 className="stack__text1">JavaScript <br/>with <b>React.js</b></h3>
            <h3 className="stack__text1">CSS3 <br/>with <b>SASS</b></h3>
          </div>
          <div className="stack__card">
            <h2 className="stack__title">Back-End</h2>
            <hr/>
            <h3 className="stack__text">WebServer <br/>with <b>Express, Django</b></h3>
            <h3 className="stack__text">Proxy Server <br/>with <b>Nginx</b></h3>
            <h3 className="stack__text">DataBase <br/>with <b>MySQL</b></h3>
          </div>
          <div className="stack__card">
            <h2 className="stack__title">Dev-Ops</h2>
            <hr/>
            <h3 className="stack__text">Code <br/>with <b>Git</b></h3>
            <h3 className="stack__text">Deploy <br/>with <b>Docker</b></h3>
            <h3 className="stack__text">Desgin <br/>with <b>Sketch</b></h3>
          </div>
        </div>
      </section>
      <section className="project">
        <h1 className="project__title">Project</h1>
        <hr/>
        <div className="project__container">
          <a href="https://play.google.com/store/apps/details?id=com.dilrong.restaurantmap&hl=ko">
          <div className="project__card">
            <img alt="project1" src="/images/img_public_store_map.png"/>
            <h4 className="project__title">공맛지</h4>
            <div className="project__content">
              <h5 className="project__text">
              공무원 업무추진비를 분석한 데이터를 구글 지도로 표기해주는 앱입니다.<br/>React Native, Node.js를 이용하여 1인 개발하였습니다.
              </h5>
              <h5 className="project__tag">#React Native #Node.js</h5>
            </div>
          </div>
          </a>
          <a href="https://weatly.com/">
          <div className="project__card">
            <img alt="project1" src="/images/img_weatly.png"/>
            <hr/>
            <h4 className="project__title">weatly</h4>
            <div className="project__content">
              <h5 className="project__text">
              대학생 기반의 음식점 멤버십 할인서비스로 PM으로 전반적인 관리와 협업을 통해 만든 웹&앱서비스입니다.
              </h5>
              <h5 className="project__tag">#React #Django #Express</h5>
            </div>
          </div>
          </a>
          <a href="https://books.dilrong.com">
          <div className="project__card">
            <img alt="project1" src="/images/img_book_shelves.png"/>
            <h4 className="project__title">Book Shelves</h4>
            <div className="project__content">
              <h5 className="project__text">
              개인적으로 읽은 책을 기록하는 사이트로 GoogleSheet에 기록한 데이터를 API로 만들어 표시해주는 웹입니다.
              </h5>
              <h5 className="project__tag">#React #Node.js</h5>
            </div>
          </div>
          </a>
        </div>
        <div className="project__container">
          <div className="project__card">
            <img alt="project1" src="/images/img_wego_rego.png"/>
            <hr/>
            <h4 className="project__title">Wego Rego</h4>
            <div className="project__content">
              <h5 className="project__text">
              2018 사회혁신 이프해커톤에서 진행 프로젝트로 난민과 통역사를 연결해주는 앱입니다. React Native을 이용하여 개발하였습니다.
              </h5>
              <h5 className="project__tag">#React Native</h5>
            </div>
          </div>
          <a href="https://foodquest.co.kr/">
          <div className="project__card">
            <img alt="project1" src="/images/img_foodquest.png"/>
            <hr/>
            <h4 className="project__title">Foodquest</h4>
            <div className="project__content">
              <h5 className="project__text">
              자신의 맛집을 공유하고 리워드받는 서비스로 전반적인 개발에 참여하여 만든 웹&앱 서비스입니다. 
              </h5>
              <h5 className="project__tag">#React #Android #Express</h5>
            </div>
          </div>
          </a>
          <a href="https://gleans.dilrong.com/">
          <div className="project__card">
            <img alt="project1" src="/images/img_gleans.png"/>
            <h4 className="project__title">Gleans</h4>
            <div className="project__content">
              <h5 className="project__text">
              주관하고 있는 독서모임 운영 관리를 위한 사이트로 React Gatsby를 이용하여 만든 웹입니다. 
              </h5>
              <h5 className="project__tag">#React #Gatsby</h5>
            </div>
          </div>
          </a>
        </div>
      </section>
      <section className="contact">
        <h1 className="contact_title">Contact</h1>
        <hr/>
        <div className="contact__container">
          <a href="https://dilrong.blog.me/"><img alt="blogger" src="/images/img_blogger_logo.png"/></a>
          <a href="https://github.com/dilrong"><img alt="github" src="/images/img_github_logo.png"/></a>
          <a href="https://s3.ap-northeast-2.amazonaws.com/portfolio.dilrong.com/hakseongLee-Resume.docx"><img alt="document" src="/images/img_document.png"/></a>
        </div>
        <span className="contact__mail"><b>Email</b><br/>dilrong@dilrong.com</span>
      </section>
      <footer>
        <span>Copyright 2019. hakseongLee. All Rights Reserved.</span>
      </footer>
      </div>
    );
  }
}

export default App;
