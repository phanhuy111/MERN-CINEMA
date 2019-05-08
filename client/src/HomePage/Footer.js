import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class Footer extends Component {
    render() {
        return (
            <div>
                <footer>
                    <div className="benphai">
                        <div className="day1 gioithieu">
                            <h1>GIỚI THIỆU CHUNG</h1>
                            <div className="duoi">
                                <ul>
                                    <li><Link to="/">Tìm Kiếm</Link></li>
                                    <li><Link to="/intro">Giới Thiệu</Link></li>
                                    <li><Link to="/contact">Hỏi Đáp</Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className="day1 huongdan">
                            <h1>HƯỚNG DẪN MUA HÀNG</h1>
                            <div className="duoi">
                                <ul>
                                    <li><Link to="/productpage1">Thời Trang Nam</Link></li>
                                    <li><Link to="/productpage1">Thời Trang Nữ</Link></li>
                                    <li><Link to="/productpage1">Phụ Kiện</Link></li>
                                    <li><Link to="/news">Blog</Link></li>
                                    <li><Link to="/productpage1">Nổi Bật</Link></li>
                                    <li><Link to="/contact">FAQ</Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className="day1 chamsoc">
                            <h1>CHĂM SÓC KHÁCH HÀNG</h1>
                            <div className="duoi">
                                <ul>
                                    <li><Link to="/infor">Giao Hàng Và Đổi Trả</Link></li>
                                    <li><Link to="/product">Bảng Kích Thước</Link></li>
                                    <li><Link to="/contact">Khuyến Mãi</Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="bentrai">
                        <div className="ketnoi">
                            <h1>Kết Nối Với Chúng Tôi</h1>
                            <div className="logo">
                                <ul>
                                    <li><Link to="https://www.facebook.com/phanjr.99" className="face wow bounceInUp">1</Link></li>
                                </ul>
                                <ul>
                                    <li><Link to="https://www.facebook.com/phanjr.99" className="ins wow bounceInUp">2</Link></li>
                                </ul>
                                <ul>
                                    <li><Link to="https://www.facebook.com/phanjr.99" className="google wow bounceInUp">3</Link></li>
                                </ul>
                                <ul>
                                    <li><Link to="https://www.facebook.com/phanjr.99" className="twitter wow bounceInUp">4</Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className="dangki"></div>
                        <h1>Đăng Kí Nhận Tin</h1>
                        <input type="text" submit="o" placeholder="Nhập Email của bạn" style={{ width: '250px' }} />

                        <span>
                            <input type="submit" submit="nut" value="Subscribe" style={{ marginLeft: '20px' }} />
                        </span>
                    </div>
                </footer>

            </div>
        );
    }
}

export default Footer;