import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actionType from "../../../../redux/14_adding_middleware/actions/actions";
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
                <button onClick = {() => this.props.onStoreResult(this.props.ctr)}>Store Result</button>
                <ul>
                    {this.props.storeResult.map(strResult => (
                        <li key = {strResult.id} onClick={() => this.props.onDeleteResult(strResult.id)}>{strResult.value}</li>
                    ))}
                </ul>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        ctr: state.ctrCounter.counter,
        storeResult: state.resResult.result
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onIncrementCounter: () => dispatch({type: actionType.INCREMENT}),
        onDecrementCounter: () => dispatch({type: actionType.DECREMENT}),
        onAddCounter: () => dispatch({type: actionType.ADD, val: 5}),
        onSubCounter: () => dispatch({type: actionType.SUB, val : 5 }),
        onStoreResult: (result) => dispatch({type: actionType.STORE_RESULT,  resultPrint: result}), 
        onDeleteResult: (id) => dispatch({type: actionType.DELETE_RESULT, resultElId: id})
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(First);
