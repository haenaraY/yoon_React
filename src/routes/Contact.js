import React from 'react';
import Header from '../componenets/Header';
import 'scss/Contact.scss';

function Contact(){
    return(
              <main id="main">
              <Header color='gray' />

        <section id="contactCont">
            <div className="container">
                <h2 className="contactTit">LET’S<br />CONTACT</h2>
                <p className="contP">궁금하신 점이 있으면 언제든지 연락 주세요.</p>
                <div className="info">
                    <p>Tel<span>010-5034-0528</span></p>
                    <p>E-mail<span>hnr5034@naver.com</span></p>
                </div>
                <div className="bottom">
                    <p>감사합니다.</p>
                </div>
            </div>
        </section>
    </main>
    )
}
export default Contact;