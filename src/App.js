import React, { Component } from "react";
import Transition from "react-transition-group/Transition";
import Modal from "./components/Modal/Modal";
import Backdrop from "./components/Backdrop/Backdrop";
import List from "./components/List/List";
import "./App.css";

class App extends Component {
  state = {
    modalIsOpen: false
  }

  showModal = () => {
    this.setState({
      modalIsOpen: true
    })
  }

  closeModal = () => {
    this.setState({
      modalIsOpen: false
    })
  }

  render() {
    return (
      <div className="App">
        <h1>React Animations</h1>
        <Transition
          timeout={1000}
          mountOnEnter
          unmountOnExit
        >
        </Transition>
        <Modal show={this.state.modalIsOpen} closed={this.closeModal} />
        { this.state.modalIsOpen ? <Backdrop show={this.state.modalIsOpen} /> : null }
        <button className="Button" onClick={this.showModal}>Open Modal</button>
        <h3>Animating Lists</h3>
        <List />
      </div>
    );
  }
}

export default App;
