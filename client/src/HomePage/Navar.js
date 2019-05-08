import React, { Component } from 'react';
import { Link } from "react-router-dom"
import { connect } from 'react-redux'
import { signOut } from './../action/authAction'

import SignUp from '../SignupModal';
import SignIn from '../SignInModal'

class Navar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isSign1: false,
            isSign2: false
        };
    }

    onToggle1 = () => {
        this.setState({ isSign1: !this.state.isSign1 });
    }

    onToggle2 = () => {
        this.setState({ isSign2: !this.state.isSign2 });
    }


    render() {
        const { auth, profile } = this.props;
        const Sign1 = this.state.isSign1 ? <SignUp state={this.onToggle1} /> : ''
        const Sign2 = this.state.isSign2 ? <SignIn state={this.onToggle2} /> : ''
        return (
            <div>
                <div className="navbar23">
                    <ul className="navbar1">
                        <div className="bentrai1">
                            <Link to="/">
                                <img className="anhavatar" src="https://theme.hstatic.net/1000296517/1000449871/14/logo.png?v=351" alt='' />
                            </Link>
                        </div>
                        <div className="benphai11">
                            <div className="linkp">
                                <li className="navbar11">
                                    <Link to="/movies">
                                        Phim Hot
                                </Link>
                                </li>
                                <li className="navbar11">
                                    <Link to="/">
                                        Khuyến Mãi
                                </Link>
                                </li>
                                <li className="navbar11">
                                    <Link to="/">
                                        Liên Hệ
                                </Link>
                                </li>
                            </div>
                            {
                                auth.uid ?
                                    (
                                        <div className="sign">
                                            <li className="navbar11" >
                                                {profile.firstName + " " + profile.lastName}
                                            </li>
                                            <li className="navbar11" onClick={this.props.signOut} >
                                                Sign Out
                                            </li>
                                        </div>
                                    )
                                    :
                                    (<div className="sign">
                                        <li className="navbar11" >
                                            <Link onClick={() => this.onToggle1()}>
                                                Sign Up
                                </Link>
                                        </li>
                                        <li className="navbar11" >
                                            <Link onClick={() => this.onToggle2()}>
                                                Sign In
                                    </Link>
                                        </li>
                                    </div>)
                            }
                        </div>
                    </ul>
                </div>
                {Sign1}
                {Sign2}
            </div >
        );
    }
}

const mapStateToProps = (state) => {
    return {
        profile: state.firebase.profile,
        auth: state.firebase.auth
    }

}

const mapDispatchToProps = (dispatch) => {
    return {
        signOut: () => dispatch(signOut())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Navar)

