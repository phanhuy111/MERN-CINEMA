import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Row, Col } from 'reactstrap';

class Booking extends Component {
    render() {
        const { movie, cinema, date, time } = this.props;
        return (
            <div style={{ marginBottom: '30px', marginTop: '65px' }}>
                <div className="d-flex mb-3 align-items-center">
                    <h3 className="mr-4">{movie.name}</h3>
                    <span>{movie.runningTime}</span>
                </div>
                <p className="text-black-50">{movie.decs}</p>
                <Row className="mx-0 py-4 border-bottom border-secondary">
                    <Col xs="12" md="5" className="pl-0 mb-3 mb-md-0">
                        <p className="text-black-50">Tên rạp</p>
                        <p>{cinema}</p>
                    </Col>
                    <Col xs="6" md="4" className="pl-0">
                        <p className="text-black-50">Ngày chiếu</p>
                        <p>{date}</p>
                    </Col>
                    <Col xs="6" md="3">
                        <p className="text-black-50">Suất</p>
                        <p>{time}</p>
                    </Col>
                </Row>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    movie: state.movie.booking.chooseMovie,
    cinema: state.movie.booking.chooseCinema,
    date: state.movie.booking.chooseDate,
    time: state.movie.booking.chooseTime
})

export default connect(mapStateToProps, null)(Booking);