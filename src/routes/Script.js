import React from 'react';
import Header from '../componenets/Header';
import Loading from '../componenets/Loading';
import Title from '../componenets/Title';
import '../scss/Script.scss';
import img01 from 'img/script/parallax1.jpg';
import img02 from 'img/script/parallax2.jpg';
import img03 from 'img/script/parallax3.jpg';

class Script extends React.Component {
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
                    <div id="scriptCont">
                    <Title text={['Script','Coding','Script Coding']} />
                    <div class="listBox">
                <div className="para cont1">
                   <a href="http://haenara.dothome.co.kr/port/parallax/parallax01.html"> 
                   <img src={img01} alt="이미지1" /></a>
                    <figcaption>
                        <p className="tit">Parallax 01</p>
                        <p className="hide">View more</p>
                    </figcaption>
                </div>
                <div className="para cont2">
                   <a href="http://haenara.dothome.co.kr/port/parallax/parallax02.html"> 
                   <img src={img02} alt="이미지2" /></a>
                    <figcaption>
                        <p className="tit">Parallax 02</p>
                        <p className="hide">View more</p>
                    </figcaption>
                </div>
                <div className="para cont3">
                    <a href="http://haenara.dothome.co.kr/port/parallax/parallax03.html">
                        <img src={img03} alt="이미지3" /></a>
                    <figcaption>
                        <p className="tit">Parallax 03</p>
                        <p className="hide">View more</p>
                    </figcaption>
                </div>
            </div>
            </div>
                )}
            </div>
        )
    }
}

export default Script;