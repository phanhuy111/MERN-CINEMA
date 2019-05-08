import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Col, Row, Container } from 'reactstrap';

class CurrentFilm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isSign1: false,
            isSign2: false,
            isYou: false,
            src: ''
        };
    }

    isOpen = (src) => {
        this.setState({
            isYou: true,
            src: src
        });
    }

    isHide = () => {
        this.setState({ isYou: false });
    }

    isYoutube = () => {
        if (this.state.isYou) {
            return (
                <div className="video">
                    <iframe
                        title="Watch Trailer..."
                        width="500px"
                        height="400px"
                        src={this.state.src}
                        frameBorder="0"
                        allow="autoplay; encrypted-media"
                    >
                    </iframe>
                    <div className="btne" onClick={this.isHide}>
                        [CLOSE]
                    </div>
                </div>
            )
        }
    }

    render() {
        console.log(this.state.src)
        return (
            <div className="currentfilm">
                <div className="tieude111">
                    <h1 className="chuhientai">
                        CURRENT FILM
                    </h1>
                </div>
                {this.isYoutube()}
                {
                    this.props.post.map((i, e) => (
                        <div className="cphim">
                            <Container>
                                <Row>
                                    <Col xs="3" key={e}>
                                        <div className="phimhientai">
                                            <img src={i.img} alt='' />
                                            <div className="title">
                                                <h2 className='tie' onClick={() => this.isOpen(i.trailer)}>
                                                    {i.title}
                                                </h2>
                                            </div>
                                        </div>
                                    </Col>
                                </Row>
                            </Container>
                        </div>
                    ))
                }
            </div>
        );
    }
}


const mapStateToProps = (state) => {
    return {
        post: state.post.items
    }
}

export default connect(mapStateToProps, null)(CurrentFilm)