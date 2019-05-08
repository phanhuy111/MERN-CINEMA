import React, { Component } from 'react';
import { connect } from 'react-redux';
import Navar from './HomePage/Navar';
import Footer from './HomePage/Footer';
import Booking from './BookingPage/Booking'
import Seat from './BookingPage/Seat'
import Ticket from './BookingPage/Ticket'

class BookingPage extends Component {
    render() {
        const { showTicket, showSeat } = this.props
        return (
            <div>
                <Navar />
                <Booking />
                {showTicket && <Ticket />}
                {showSeat && <Seat />}
                <Footer />
            </div>
        );
    }
}

const mapStateToProps = state => ({
    showTicket: state.movie.booking.isShowTicket,
    showSeat: state.movie.booking.isShowSeat
})

export default connect(mapStateToProps, null)(BookingPage);





