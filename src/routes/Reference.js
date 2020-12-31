import React from 'react';
import Header from '../componenets/Header';
import Loading from '../componenets/Loading';
import Title from '../componenets/Title';
import '../scss/Reference.scss';

class Reference extends React.Component {
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
                    <div id="referCont">
                    <Title text={['Reference','','Reference']} />
                    <p>준비중입니다.</p>
                   </div>
                )}
            </div>
        )
    }
}

export default Reference;