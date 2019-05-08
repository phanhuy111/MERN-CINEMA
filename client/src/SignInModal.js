import React, { Component } from 'react';
import { connect } from 'react-redux'
import { signIn } from './action/authAction'

class SignInModal extends Component {
    state = {
        username: "",
        password: "",
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        });
    }

    // isHide = () => {
    //     this.setState({
    //         isHide: !this.state.isHide
    //     });
    // }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.signIn(this.state)
    }

    render() {
        const { authError } = this.props;
        return (
            <div className="container111">
                <form className="white" onSubmit={this.handleSubmit}>
                    <h5 className="grey-text text-darken-3">Sign In</h5>
                    <div className="input-field">
                        <label htmlFor="email">Email</label>
                        <input type="email" id='email' onChange={this.handleChange} />
                    </div>
                    <div className="input-field">
                        <label htmlFor="password">Password</label>
                        <input type="password" id='password' onChange={this.handleChange} />
                    </div>
                    <div className="input-field">
                        <button className="btn pink lighten-1 z-depth-0">Login</button>
                        <button className="btn pink lighten-1 z-depth-0" onClick={this.props.state}>Close</button>
                        <div className="center red-text">
                            {authError ? <p>{authError}</p> : null}
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        authError: state.auth.authError,
        auth: state.firebase.auth
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        signIn: (creds) => dispatch(signIn(creds))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignInModal)