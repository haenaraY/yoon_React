import React from 'react';
import Header from '../componenets/Header';
import Loading from '../componenets/Loading';
import Title from '../componenets/Title';
import '../scss/Port.scss';
import img01 from 'img/port/port1.jpg';
import img02 from 'img/port/port02.jpg';
import img03 from 'img/port/port03.jpg';
import img04 from 'img/port/port04.jpg';
import img05 from 'img/port/port05.jpg';


class Port extends React.Component {
    state = {
        isLoading: true,
    };

    getRefer = async () => {
        this.setState({ isLoading: false });
    }

    componentDidMount(){
        setTimeout(() => {
            this.setState({ isLoading: false });
        }, 1000);
    }

    render(){
        const { isLoading } = this.state;
        return (
            <div id="wrap">
                <Header />
                { isLoading ? (
                    <Loading />
                ):(
                    <section id="portCont">
                    <div className="container">
                    <Title text={['Portfolio','Website','Portfolio Website']} />
                        <div className="portCont">
                            <div className="siteList">
                                <div className="left cont">
                                    <img src={img01} alt="웹표준 사이트 이미지" />
                                </div>
                                <div className="right txt">
                                    <h3>STANDARDS</h3>
                                    <a href="http://haenara.dothome.co.kr/Portfolio/standard/index.html">
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                        SITE VIEW
                                    </a>
                                </div>
                            </div>
                            <div className="siteList">
                                <div className="left cont">
                                    <h3>RESPONSIVE</h3>
                                    <a href="http://haenara.dothome.co.kr/Portfolio/responsive/index.html#">
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                        SITE VIEW
                                    </a>
                                </div>
                                <div className="right txt">
                                    <img src={img02}  alt="반응형 사이트 이미지" />

                                </div>
                            </div>
                            <div className="siteList">
                                <div className="left cont">
                                    <img src={img03} alt="중소벤쳐24 사이트 이미지" />
                                </div>
                                <div className="right txt">
                                    <h3>SMES 24</h3>
                                    <a href="http://haenara.dothome.co.kr/Portfolio/venture24/index.html">
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                        SITE VIEW
                                    </a>
                                </div>
                            </div>
                            <div className="siteList">
                                <div className="left cont">
                                    <h3>NIKE</h3>
                                    <a href="http://haenara.dothome.co.kr/Portfolio/nike/index.html">
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                        SITE VIEW
                                    </a>
                                </div>
                                <div className="right txt">
                                    <img src={img04} alt="나이키 사이트 이미지" />
                                </div>
                            </div>
                            <div className="siteList last">
                                <div className="left cont">
                                    <img src={img05} alt="반응형 사이트 이미지" />
                                </div>
                                <div className="right txt">
                                    <h3>Agency</h3>
                                    <a href="http://haenara.dothome.co.kr/Portfolio/AA/index.html">
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                        SITE VIEW
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                )}
            </div>
        )
    }
}

export default Port;