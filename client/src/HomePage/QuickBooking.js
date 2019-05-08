import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

class QuickBooking extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dropdownOpen1: false,
            dropdownOpen2: false,
            dropdownOpen3: false,
            dropdownOpen4: false,
        };
    }

    toggle1 = () => {
        this.setState(prevState => ({
            dropdownOpen1: !prevState.dropdownOpen1
        }));
    }

    toggle2 = () => {
        this.setState(prevState => ({
            dropdownOpen2: !prevState.dropdownOpen2
        }));
    }
    toggle3 = () => {
        this.setState(prevState => ({
            dropdownOpen3: !prevState.dropdownOpen3
        }));
    }
    toggle4 = () => {
        this.setState(prevState => ({
            dropdownOpen4: !prevState.dropdownOpen4
        }));
    }

    render() {
        console.log(this.props.classHide)
        return (
            <div
                className={"quick " + this.props.classHide}
            >
                <div className="input">
                    <Dropdown isOpen={this.state.dropdownOpen1} toggle={this.toggle1}>
                        <DropdownToggle caret>
                            Chọn Rạp
                        </DropdownToggle>
                        <DropdownMenu>
                            <DropdownItem header>Header</DropdownItem>
                        </DropdownMenu>
                    </Dropdown>
                </div>
                <div className="input">
                    <Dropdown isOpen={this.state.dropdownOpen2} toggle={this.toggle2}>
                        <DropdownToggle caret>
                            Chọn Phim
                        </DropdownToggle>
                        <DropdownMenu>
                            <DropdownItem header>Header</DropdownItem>
                        </DropdownMenu>
                    </Dropdown>
                </div>
                <div className="input">
                    <Dropdown isOpen={this.state.dropdownOpen3} toggle={this.toggle3}>
                        <DropdownToggle caret>
                            Chọn Thời Gian
                        </DropdownToggle>
                        <DropdownMenu>
                            <DropdownItem header>Header</DropdownItem>
                        </DropdownMenu>
                    </Dropdown>
                </div>
                <div className="input">
                    <Dropdown isOpen={this.state.dropdownOpen4} toggle={this.toggle4}>
                        <DropdownToggle caret>
                            Chọn Ghế
                        </DropdownToggle>
                        <DropdownMenu>
                            <DropdownItem header>Header</DropdownItem>
                        </DropdownMenu>
                    </Dropdown>
                </div>
                <div className="button">
                    <button
                        onClick={() => { }}
                    >
                        Đặt Vé
                    </button>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({

});

export default connect(mapStateToProps, null)(QuickBooking)