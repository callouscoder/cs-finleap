import React, { Component } from 'react';

class ToggleButton extends Component {
    constructor(props) {
        super(props);

        this.state = {
            active: false
        }
    }

    handleOnClick = option => {
        this.setState({ 
            active: !this.state.active 
        }, () => {
            this.props.handleClick(this.props.option, this.state.active)
        })
    }

    render() {
        return (
            <button 
            className={`option-${this.props.option} ${this.state.active}`} 
            onClick={() => this.handleOnClick(this.props.option)}></button>
        )
    }
}

export default ToggleButton;