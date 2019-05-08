import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addTicket, subtractTicket, showSeat } from './../action/movieAction';
import { Row, Col, Button } from 'reactstrap';

class Ticket extends Component {
    render() {
        const { movie, tickets } = this.props;
        console.log(tickets)
        return (
            <div className="mb-4">
                <Row className="mx-0 py-4">
                    <Col className="bentrai444">
                        <p>Vé người lớn</p>
                        <p className="text-black-50">(vé 2D)</p>
                    </Col>
                    <Col className="ogiua444">
                        <p className="text-info">{movie.price}</p>
                    </Col>
                    <Col className="benphai444">
                        <button
                            onClick={() => this.props.subtractTicket()}
                            className="bookingPage__btn"
                        >
                            -
                        </button>
                        <div className="bookingPage__count">
                            {tickets}
                        </div>
                        <button
                            onClick={() => this.props.addTicket()}
                            className="bookingPage__btn"
                        >
                            +
                        </button>
                    </Col>
                </Row>
                <div className="py-4 border-bottom border-secondary">
                    <Button onClick={() => this.props.showSeat()} color="danger">
                        <span className="mr-2">Chọn Ghế</span>
                    </Button>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    movie: state.movie.booking.chooseMovie,
    tickets: state.movie.booking.tickets,
    // combo: state.movie.booking.combo
})

export default connect(mapStateToProps, { addTicket, subtractTicket, showSeat })(Ticket);