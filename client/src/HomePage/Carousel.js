import React, { Component } from 'react';
import Slider from 'react-slick';
import { connect } from 'react-redux'

class Carousel extends Component {

    render() {
        var settings = {
            infinite: true,
            speed: 500,
            arrows: true,
            autoplay: true,
            autoplaySpeed: 5000,
        };
        return (
            <div className="slider1">
                <Slider {...settings}>
                    {
                        this.props.post.map((i, e) => (
                            <div>
                                <div className="sli">
                                    <img className="imgage" src={i.img} alt='aaa' />
                                </div>
                            </div>
                        ))
                    }
                </Slider>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        post: state.post.items
    }
}

export default connect(mapStateToProps, null)(Carousel)