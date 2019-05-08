import React, { Component } from 'react';
import { connect } from 'react-redux';
import classnames from 'classnames';
import { Button } from 'reactstrap';

import { chooseSeat, showPayment } from './../action/movieAction';

class Seat extends Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }

    handleClick = (name, active) => {
        if (!active) return this.props.chooseSeat(name);
    }


    checkActive = (name) => {
        if (this.props.getSeat.includes(name)) return true;
        return false
    }



    errMessage = () => {
        if (this.props.tickets !== this.props.getSeat.length) {
            return (
                <div className="error">
                    <p>Vui lòng chọn ghế ngồi trước.</p>
                </div>
            )
        }
    }

    handleNext() {
        return this.props.showPayment();
    }

    render() {
        const { seat } = this.props;
        console.log(this.props.getSeat)
        return (
            <div className="py-4 bookingPage__container">
                {seat.map((item, index) => (
                    <div
                        key={index}
                        className="bookingPage__col py-1 px-1 d-inline-block py-md-2 px-md-2"
                    >
                        <div
                            onClick={() => this.handleClick(item.name, item.status)}
                            className={`${classnames({ deactive: item.status === false }, { active: this.checkActive(item.name) })} bookingPage__seat d-flex justify-content-center align-items-center rounded`}
                        >
                            {item.name}
                        </div>
                    </div>
                ))}
                {this.errMessage}
                <div className="py-4 border-bottom border-secondary">
                    <Button onClick={this.handleNext} color="danger">
                        <span className="mr-2">Thanh Toán</span>
                    </Button>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    seat: state.movie.booking.seat,
    tickets: state.movie.booking.tickets,
    getSeat: state.movie.booking.chooseSeat
})

export default connect(mapStateToProps, { chooseSeat, showPayment })(Seat);