import React, { Component } from 'react';
import Navar from './HomePage/Navar';
import Footer from './HomePage/Footer';
import InforMovie from './Movie/InforMovie'


class InforMoviePage extends Component {
    render() {
        const slug = this.props.match.params.slug
        return (
            <div>
                <Navar />
                <InforMovie slug={slug} />
                <Footer />
            </div>
        );
    }
}

export default InforMoviePage;


