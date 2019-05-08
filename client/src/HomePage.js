import React, { Component } from 'react';
import Navar from './HomePage/Navar';
import Carousel from './HomePage/Carousel';
import NewFilm from './HomePage/NewFilm';
import Footer from './HomePage/Footer';
import Quick from './HomePage/QuickBooking'
import Current from './HomePage/CurrentFilm'
// import SignInModal from './SignInModal'
// import SignUpModal from './SignupModal'


class HomePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isHide: false,
            // sign: true
        };
    }

    hideBar = () => {
        if (window.scrollY === 0 || window.scrollY < 330 || window.scrollY > 3179) {
            this.setState({ isHide: true })
        }
        else {
            this.setState({ isHide: false })
        }
    }
    componentDidMount() {
        window.addEventListener('scroll', this.hideBar);
    }
    componentWillUnmount() {
        window.removeEventListener('scroll', this.hideBar);
    }


    render() {
        // alert('hhi')
        let classHide = this.state.isHide ? "hide" : " "
        // const SignUp = this.state.sign ? <SignUpModal /> : ''
        // const SignIn = this.state.sign ? <SignInModal /> : ''
        return (
            <div>
                {/* {SignUp}
                {SignIn} */}
                <Quick classHide={classHide} />
                <Navar />
                <Carousel />
                <NewFilm />
                <Current />
                <Footer />
            </div>
        );
    }
}

export default HomePage;


