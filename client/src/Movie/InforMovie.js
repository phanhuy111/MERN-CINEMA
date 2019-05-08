import React, { Component } from 'react';
import { connect } from 'react-redux'
import jump from 'jump.js'
import { chooseMovie, resetBooking } from './../action/movieAction'
import ShowTime from './ShowTime'
// import { Col, Row, Container } from 'reactstrap';
// import { Link } from 'react-router-dom'

class InforMovie extends Component {
    constructor() {
        super()
        this.state = {
            isShow: false
        }
    }

    bookingNow = (name) => {
        this.props.resetBooking();
        jump('#showTime', {
            offset: -50
        });
        this.props.chooseMovie(name);
        this.setState({
            isShow: true
        })
    }
    render() {
        const movies = this.props.movie.filter(item => item.slug === this.props.slug)[0];
        return (
            <div>
                <div className="informovie">
                    <div className="phai-movie">
                        <div className="anhmovie">
                            <img src={movies.thumbnail} alt={movies.name} />
                        </div>
                        <div style={{ marginTop: '17px' }}>
                            <span className="booking" onClick={() => this.bookingNow(movies.name)}>
                                BOOKING TICKET
                            </span>
                        </div>
                    </div>
                    <div className="trai-movie">
                        <div className="quocgia">
                            <span>
                                Nation :
                        </span>
                            <span>
                                {movies.language}
                            </span>
                        </div>
                        <div className="daodien">
                            <span>
                                Director :
                        </span>
                            <span>
                                {movies.dicrector}
                            </span>
                        </div>
                        <div className="dienvien">
                            <span>
                                Actor :
                        </span>
                            <span>
                                {movies.cast.join(', ')}
                            </span>
                        </div>
                        <div className="theloai">
                            <span>
                                Genre :
                        </span>
                            <span>
                                {movies.genre.join(', ')}
                            </span>
                        </div>
                        <div className="theloai">
                            <span>
                                Description :
                        </span>
                            <span>
                                {movies.decs}
                            </span>
                        </div>
                    </div>
                </div>
                <div id="showTime" style={{ marginBottom: '10%' }}>
                    {
                        this.state.isShow && <ShowTime />
                    }
                </div>
            </div>
        );
    }
}


const mapStateToProps = (state) => {
    return {
        movie: state.movie.items
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        chooseMovie: (i) => dispatch(chooseMovie(i)),
        resetBooking: (i) => dispatch(resetBooking(i))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(InforMovie)