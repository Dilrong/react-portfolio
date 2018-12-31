import React, { Component } from 'react'
import './ProjectContainer.css'
import { Carousel, CarouselItem, CarouselControl, CarouselIndicators } from 'reactstrap'

const items = [
    {
        src: 'https://s3.ap-northeast-2.amazonaws.com/portfolio.dilrong.com/public-restaurant-map.png',
        altText: '공맛지',
        description: '공무원 업무 추진비를 활용한 애플리케이션',
        stack: '#react-native #node.js',
        url: 'https://github.com/Dilrong/public-restaurant-map'
    },
    {
        src: 'https://s3.ap-northeast-2.amazonaws.com/portfolio.dilrong.com/books-dilrong.png',
        altText: 'books.dilrong.com',
        description: '독서 기록을 위한 웹 페이지',
        stack: '#react #node.js',
        url: 'https://github.com/Dilrong/react-bookshelves'
    },
    {
        src: 'https://s3.ap-northeast-2.amazonaws.com/portfolio.dilrong.com/foodquest.png',
        altText: 'foodquest',
        description: '비콘을 이용한 멤버십 검증 애플리케이션',
        stack: '#android #node.js',
        url: 'https://play.google.com/store/apps/details?id=weatlybeacon.bluefrog.com.weatlybeacon'
    },
    {
        src: 'https://s3.ap-northeast-2.amazonaws.com/portfolio.dilrong.com/weatly.png',
        altText: 'weatly',
        description: '대학생 할인 혜택 모음 웹사이트',
        stack: '#wordpress',
        url: 'http://weatly.com/'
    },
    {
        src: 'https://s3.ap-northeast-2.amazonaws.com/portfolio.dilrong.com/kimnkim-project.png',
        altText: 'kimnkim',
        description: '워드프레스를 이용한 병원 웹사이트',
        stack: '#wordpress',
        url: 'https://kimnkimdental.com'
    },
    {
        src: 'https://s3.ap-northeast-2.amazonaws.com/portfolio.dilrong.com/excel.foodquest.png',
        altText: 'excel.fooduqest',
        description: '구글 시트를 이용한 맛집 공유 웹사이트',
        stack: '#react #nodejs',
        url: 'https://github.com/Dilrong/react-foodquest-excel'
    },
    {
        src: 'https://s3.ap-northeast-2.amazonaws.com/portfolio.dilrong.com/officezombie.png',
        altText: 'office zombie',
        description: 'Unity3D을 이용한 ViveVR게임',
        stack: '#Unity3D',
        url: 'https://github.com/Dilrong/OfficeZombie'
    },
    {
        src: 'https://s3.ap-northeast-2.amazonaws.com/portfolio.dilrong.com/haksan_talk.png',
        altText: '학산도서관 검색 챗봇',
        description: '웹 크롤러를 이용한 도서관 책 검색 챗봇',
        stack: '#flask',
        url: 'https://github.com/Dilrong/flask-inu-kakaobot'
    },
    {
        src: 'https://s3.ap-northeast-2.amazonaws.com/portfolio.dilrong.com/wegorego.png',
        altText: 'WegoRego',
        description: '난민지원을 위한 지도 애플리케이션',
        stack: '#react-native',
        url: 'https://github.com/Dilrong/kws-wegorego-app'
    }
]

class ProjectContainer extends Component {
    constructor(props) {
        super(props);
        this.state = { activeIndex: 0};
        this.next = this.next.bind(this);
        this.previous = this.previous.bind(this);
        this.goToIndex = this.goToIndex.bind(this);
        this.onExiting = this.onExiting.bind(this);
        this.onExited = this.onExited.bind(this);
    }

    onExiting() {
        this.animating = true;
      }
    
      onExited() {
        this.animating = false;
      }
    
      next() {
        if (this.animating) return;
        const nextIndex = this.state.activeIndex === items.length - 1 ? 0 : this.state.activeIndex + 1;
        this.setState({ activeIndex: nextIndex });
      }
    
      previous() {
        if (this.animating) return;
        const nextIndex = this.state.activeIndex === 0 ? items.length - 1 : this.state.activeIndex - 1;
        this.setState({ activeIndex: nextIndex });
      }
    
      goToIndex(newIndex) {
        if (this.animating) return;
        this.setState({ activeIndex: newIndex });
      }
    render() {
        const { activeIndex } = this.state;

        const slides = items.map((item) => {
            return (
                <CarouselItem
                    onExiting={this.onExiting}
                    onExited={this.onExited}
                    key={item.src}
                >
                <div className='ProjectOverlayContainer'>
                    <a href={item.url}>
                        <img className='kimnkim' src={item.src} alt={item.altText}/>
                    </a>
                    <div className="ProjectOverlay">{item.description}<br/>{item.stack}</div>
                </div>
                </CarouselItem>
            );
        });
        return (
            <div className='ProjectContainer'>
                <Carousel
                activeIndex={activeIndex}
                next={this.next}
                previous={this.previous}
            >
                <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={this.goToIndex}/>
                {slides}
                <CarouselControl direction="prev" directionText="Previous" onClickHandler={this.previous} />
                <CarouselControl direction="next" directionText="Next" onClickHandler={this.next} />
            </Carousel>
            </div>
        );
    }
}

export default ProjectContainer;
