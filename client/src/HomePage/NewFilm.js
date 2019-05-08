import React, { Component } from 'react';
import Slider from 'react-slick';
import { connect } from 'react-redux'

class NewFilm extends Component {
    render() {
        console.log(this.props.post)
        var settings = {
            className: "center",
            centerMode: true,
            infinite: true,
            centerPadding: "100px",
            slidesToShow: 4,
            speed: 500
        };
        return (
            <div className="slider11">
                <div className="chutieude1">
                    <img className="tieudett" src="https://www.cgv.vn/skin/frontend/cgv/default/images/bg-cgv/h3_movie_selection.gif" alt="" />
                </div>
                <Slider {...settings}>
                    {
                        this.props.post.map((i, e) => (
                            <div>
                                <div className="sli1">
                                    <img className="imgage1" src={i.img} alt='aaa' />
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

export default connect(mapStateToProps, null)(NewFilm)