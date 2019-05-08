import React, { Component } from 'react';
import Navar from './HomePage/Navar';
import Footer from './HomePage/Footer';
import Movies from './ListMovie/Movies'


class ListMoviePage extends Component {
    render() {
        return (
            <div>
                <Navar />
                <Movies />
                <Footer />
            </div>
        );
    }
}

export default ListMoviePage;


