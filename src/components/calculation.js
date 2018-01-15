import React, { Component } from 'react';
import {DECREMENT,middleINCRENT} from '../redux/action';

export default class Count extends Component {
    constructor(props) {
        super(props);
        this.state = {
            changeVal:1
        }
    }

    input = (e)=>{
        this.setState({changeVal: Number(e.target.value)});
    };

    render() {
        let {dispatch,getValue} = this.props;
        return <div>
            this is calculation
            <h1>{getValue}</h1>
            <input type="text" onChange={this.input} value={this.state.changeVal} />
            <button onClick={() => (dispatch(middleINCRENT(this.state.changeVal)))}>+</button>
            <button onClick={() => (dispatch(DECREMENT(this.state.changeVal)))}>-</button>
        </div>
    }
}