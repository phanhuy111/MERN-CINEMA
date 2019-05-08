import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { chooseCinema, chooseDate, chooseTime } from './../action/movieAction';
import { Row, Col } from 'reactstrap';

class ShowTime extends Component {
    render() {
        const { movie, listCinema, listDate, listTime } = this.props;
        console.log(movie)
        console.log(listCinema)
        return (
            <Row>
                <Col xs="12" xl={{ size: 10, offset: 1 }}>
                    <h4 className="mb-4 border-left pl-3 d-flex align-items-center pb-1">LỊCH CHIẾU PHIM</h4>
                    <Row className="border-top border-right border-left border-secondary mx-0">
                        <Col
                            xs="5"
                            md="6"
                            className="moviePage__table--title d-flex justify-content-center"
                        >
                            RẠP CHIẾU
                        </Col>
                        <Col
                            xs="4"
                            md="3"
                            className="moviePage__table--title d-flex justify-content-center"
                        >
                            NGÀY CHIẾU
                        </Col>
                        <Col
                            xs="3"
                            className="moviePage__table--title d-flex justify-content-center"
                        >
                            XUẤT CHIẾU
                        </Col>
                    </Row>
                    <Row className="border border-secondary mx-0">
                        <Col xs="5" md="6">
                            {listCinema.length !== 0 && listCinema.map((item, index) => (
                                <div
                                    className="moviePage__table--list border-bottom"
                                    onClick={() => this.props.chooseCinema(item)}
                                    key={index}
                                >
                                    {item}
                                </div>
                            ))}
                        </Col>
                        <Col xs="4" md="3" className="border-left border-right border-secondary">
                            {listDate.length !== 0 && listDate.map((item, index) => (
                                <div
                                    className="moviePage__table--list border-bottom"
                                    onClick={() => this.props.chooseDate(item)}
                                    key={index}
                                >
                                    {item}
                                </div>
                            ))}
                        </Col>
                        <Col xs="3">
                            {listTime.length !== 0 && listTime.map((item, index) => (
                                <div
                                    className="moviePage__table--list border-bottom"
                                    onClick={() => this.props.chooseTime(item)}
                                    key={index}
                                >
                                    <Link to={`/booking/${movie.slug}`}>{item}</Link>
                                </div>
                            ))}
                        </Col>
                    </Row>
                </Col>
            </Row>
        )
    }
}

const mapStateToProps = state => ({
    movie: state.movie.booking.chooseMovie,
    listCinema: state.movie.booking.listCinema,
    listDate: state.movie.booking.listDate,
    listTime: state.movie.booking.listTime
})

export default connect(mapStateToProps, { chooseCinema, chooseDate, chooseTime })(ShowTime);