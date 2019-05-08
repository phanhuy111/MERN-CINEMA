import {
    FETCH_MOVIES,
    CHOOSE_MOVIE,
    CHOOSE_CINEMA,
    CHOOSE_DATE,
    CHOOSE_TIME,
    ADD_TICKET,
    SUBTRACT_TICKET,
    SHOW_TICKET,
    SHOW_SEAT,
    SHOW_PAYMENT,
    CHOOSE_SEAT,
    ADD_AMOUNT,
    MOVIE_LOADING,
    RESET_BOOKING
} from '../constant/movieCons';

export const fetchMovies = () => dispatch => {
    fetch('http://localhost:5000/api/movies', {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        }
    })
        .then(res => res.json())
        .then(movie => dispatch({
            type: FETCH_MOVIES,
            payload: movie
        }));
}

export const chooseMovie = (movie) => dispatch => {
    dispatch({
        type: CHOOSE_MOVIE,
        payload: movie
    })
}

export const chooseCinema = (cinema) => dispatch => {
    dispatch({
        type: CHOOSE_CINEMA,
        payload: cinema
    })
}

export const chooseDate = (date) => dispatch => {
    dispatch({
        type: CHOOSE_DATE,
        payload: date
    })
}

export const chooseTime = (time) => dispatch => {
    dispatch({
        type: CHOOSE_TIME,
        payload: time
    })
}


export const addTicket = () => dispatch => {
    dispatch({
        type: ADD_TICKET
    })
}

export const subtractTicket = () => dispatch => {
    dispatch({
        type: SUBTRACT_TICKET
    })
}

export const resetBooking = () => dispatch => {
    dispatch({
        type: RESET_BOOKING
    })
}

export const showTicket = () => dispatch => {
    dispatch({
        type: SHOW_TICKET
    })
}

export const showSeat = () => dispatch => {
    dispatch({
        type: SHOW_SEAT
    })
}

export const showPayment = () => dispatch => {
    dispatch({
        type: SHOW_PAYMENT
    })
}

export const chooseSeat = (seat) => dispatch => {
    dispatch({
        type: CHOOSE_SEAT,
        payload: seat
    })
}

export const addAmount = data => dispatch => {
    dispatch({
        type: ADD_AMOUNT,
        payload: data
    })
}

//   export const checkout = data => dispatch => {
//     fetch('http://localhost:5000/api/movies/checkout', {
//       method: 'PATCH',
//       headers: {
//       'Accept': 'application/json',
//       'Content-Type': 'application/json',
//     },
//       body: data
//     })
//       .then(res => res.json())
//       .then(result => dispatch({
//         type: CHECKOUT,
//         payload: result
//       }));
//   }

export const movieLoading = () => dispatch => {
    dispatch({
        type: MOVIE_LOADING
    })
}