import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { connect } from 'react-redux';
import { fetchMovies } from './action/movieAction';
import { fetchPost } from './action/postAction';
import Home from "./HomePage"
import BookingPage from "./BookingPage"
import ListMovie from './ListMoviePage'
import InforMovie from './InforMoviePage'

class App extends Component {
  componentDidMount() {
    this.props.fetchMovies();
    this.props.fetchPost();
  }

  render() {
    return (
      <div className="App">
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/movies" component={ListMovie} />
            <Route
              path={`/movie/:slug`}
              component={InforMovie}
            />
            <Route
              path={`/booking/:slug`}
              component={BookingPage}
            />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default connect(null, { fetchMovies, fetchPost })(App);