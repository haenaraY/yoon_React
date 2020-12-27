import React from 'react';
import Header from '../componenets/Header';
import Loading from '../componenets/Loading';
import Title from '../componenets/Title';
import '../scss/About.scss';

class About extends React.Component {
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
                <Header color="gray" />
                { isLoading ? (
                    <Loading color="white" />
                ):(
                    <section id="aboutCont">
            <div class="container">
            <Title text={['About',' Me','About Me']} />
                <div class="aboutTxt">
                    <div class="word">
                        <div>a</div>
                        <div><span>mbitious</span></div>
                        <span class="ko">야심 찬</span>
                    </div>
                    <div class="word">
                        <div>b</div>
                        <div><span>right</span></div>
                        <span class="ko">빛나는</span>
                    </div>
                    <div class="word">
                        <div>c</div>
                        <div><span>redible</span></div>
                        <span class="ko">믿을 만한</span>
                    </div>
                    <div class="word">
                        <div>D</div>
                        <div><span>iligent</span></div>
                        <span class="ko">근면한</span>
                    </div>
                    <div class="word">
                        <div>e</div>
                        <div><span>arnest</span></div>
                        <span class="ko">성실한</span>
                    </div>
                    <div class="word">
                        <div>f</div>
                        <div><span>aithful</span></div>
                        <span class="ko">충실한</span>
                    </div>
                    <div class="word">
                        <div>g</div>
                        <div><span>enial</span></div>
                        <span class="ko">다정한</span>
                    </div>
                    <div class="word">
                        <div>h</div>
                        <div><span>honest</span></div>
                        <span class="ko">진솔한</span>
                    </div>
                    <div class="word">
                        <div>i</div>
                        <div><span>ndustrious</span></div>
                        <span class="ko">근면한</span>
                    </div>
                    <div class="word">
                        <div>j</div>
                        <div><span>ovial</span></div>
                        <span class="ko">유쾌한</span>
                    </div>
                    <div class="word">
                        <div>k</div>
                        <div><span>ind</span></div>
                        <span class="ko">친절한</span>
                    </div>
                    <div class="word">
                        <div>l</div>
                        <div><span>ikable</span></div>
                        <span class="ko">호감이 가는</span>
                    </div>
                    <div class="word">
                        <div>m</div>
                        <div><span>odest</span></div>
                        <span class="ko">겸손한</span>
                    </div>
                    <div class="word">
                        <div>n</div>
                        <div><span>eat</span></div>
                        <span class="ko">단정한</span>
                    </div>
                    <div class="word">
                        <div>o</div>
                        <div><span>rganized</span></div>
                        <span class="ko">체계적인</span>
                    </div>
                    <div class="word">
                        <div>p</div>
                        <div><span>ositive</span></div>
                        <span class="ko">긍정적인</span>
                    </div>
                    <div class="word">
                        <div>q</div>
                        <div><span>uick-witted</span></div>
                        <span class="ko">눈치가 빠른</span>
                    </div>
                    <div class="word">
                        <div>r</div>
                        <div><span>esponsible</span></div>
                        <span class="ko">책임감있는</span>
                    </div>
                    <div class="word">
                        <div>s</div>
                        <div><span>ociable</span></div>
                        <span class="ko">사교적인</span>
                    </div>
                    <div class="word">
                        <div>t</div>
                        <div><span>ruthful</span></div>
                        <span class="ko">정직한</span>
                    </div>
                    <div class="word">
                        <div>u</div>
                        <div><span>nquestionable</span></div>
                        <span class="ko">의심할 여지없는</span>
                    </div>
                    <div class="word">
                        <div>v</div>
                        <div><span>ivacious</span></div>
                        <span class="ko">생기발랄한</span>
                    </div>
                    <div class="word">
                        <div class="last">w</div>
                        <div><span>eb frontend</span></div>
                        <span class="ko">신입 프론트엔드 개발자</span>
                    </div>
                </div>
            </div>
        </section>
                )}
            </div>
        )
    }
}

export default About;