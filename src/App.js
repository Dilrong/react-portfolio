import React, { Component } from 'react'
import Slider from 'react-onepage'
import { MainContainer, AboutContainer, SkillContainer, ProjectContainer, ContactContainer } from './containers'
import './App.css'

class App extends Component {
  constructor() {
    super()
    this.state = {pageIndex: 0}
  }
  handlePage(pageIndex) {
    this.setState({pageIndex})
  }
  render() {
    return (
      <Slider
        pageIndex={this.state.pageIndex}
        onPage={this.handlePage.bind(this)}>
        <MainContainer/>
        <AboutContainer/>
        <SkillContainer/>
        <ProjectContainer/>
        <ContactContainer/>
      </Slider>
    );
  }
}

export default App;
