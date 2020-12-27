import React from 'react';
import Header from '../componenets/Header';
import '../scss/Main.scss';
import img01 from 'img/main_1.jpg';
import img02 from 'img/main_2.jpg';
import img03 from 'img/main_3.jpg';

function Main(){
    return(
        <main id="main">
            <Header />
        <section id="mainCont">
            <div className="img01">
                <img src={img01} alt="메인 이미지1" />
            </div>
            <div className="img02">
                <img src={img02} alt="메인 이미지2" />
            </div>
            <div className="img03">
                <img src={img03} alt="메인 이미지3" />
            </div>  
            <div className="mainText">
                <div className="react">REACT</div>
                <div>PORTFOLIO</div>
            </div>
            <div class="white">yoon HAENARA</div>
        </section>
    </main>

    )
}

export default Main;