import React, { Component } from 'react';
import { connect } from 'react-redux';
import CounterControl from '../Components/CounterControl';
import CounterOutput from '../Components/CounterOutput';

class First extends Component {
    state = {
        counter: 0
    }

    render () {
        return (
            <div>
                <CounterOutput value={this.props.ctr} />
                <div style={{textAlign: "center"}}>
                <CounterControl label="Increment" clicked={this.props.onIncrementCounter} />
                <CounterControl label="Decrement" clicked={this.props.onDecrementCounter}  />
                <CounterControl label="Add 5" clicked={this.props.onAddCounter}  />
                <CounterControl label="Subtract 5" clicked={this.props.onSubCounter}  />
                </div>
                <hr/>
                <button onClick = {this.props.onStoreResult}>Store Result</button>
                <ul>
                    {this.props.storeResult.map(strResult => (
                        <li key= {strResult.id}>{strResult.value}</li>
                    ))}
                </ul>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        ctr: state.counter,
        storeResult: state.result
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onIncrementCounter: () => dispatch({type: 'INCREMENT'}),
        onDecrementCounter: () => dispatch({type: 'DECREMENT'}),
        onAddCounter: () => dispatch({type: 'ADD', val: 5}),
        onSubCounter: () => dispatch({type: 'SUB', val : 5 }),
        onStoreResult: () => dispatch({type: "STORE_RESULT"})
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(First);
