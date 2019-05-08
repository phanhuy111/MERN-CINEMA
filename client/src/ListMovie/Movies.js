import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Col, Row, Container } from 'reactstrap';
import { Link } from 'react-router-dom'

class Movies extends Component {
    render() {
        return (
            <div className="currentfilm1">
                <div className="tieude1111">
                    <h1 className="chuhientai1">
                        HOT FILM
                    </h1>
                </div>
                <div className="moiphim">
                    <Container>
                        <Row>
                            {
                                this.props.movie.map((i, e) => (
                                    <div className="cphim2">
                                        <Col xs="3" key={e}>
                                            <div className="phimhientai">
                                                <img src={i.thumbnail} alt='' />
                                                <div className="title1">
                                                    <h2 className='tie'>
                                                        <Link
                                                            to={`/movie/${i.slug}`}
                                                        >
                                                            {i.name}
                                                        </Link>
                                                    </h2>
                                                </div>
                                            </div>
                                        </Col>
                                    </div>
                                ))
                            }
                        </Row>
                    </Container>
                </div>
            </div>
        );
    }
}


const mapStateToProps = (state) => {
    console.log(state.movie)
    return {
        movie: state.movie.items
    }
}

export default connect(mapStateToProps, null)(Movies)